const express = require('express');
const axios = require('axios');
const router = express.Router();
const registry = require('./registry.json');
const fs = require('fs');
const loadbalancer = require('../util/loadbalancer');

router.post('/enable/:apiName', (req, res) => {
    const apiName = req.params.apiName;
    const requestBody = req.body;
    const instances = registry.services[apiName].instances;
    const index = instances.findIndex(srv => {
        return srv.url === requestBody.url
    });
    if (index === -1) {
        res.send({
            status: 'error',
            message: `Could not find ${requestBody.url} for service ${apiName}`
        });
    }
    else {
        instances[index].enabled = requestBody.enabled;
        fs.writeFile('./routes/registry.json', JSON.stringify(registry), (err) => {
            if (err) {
                res.send('Could not enable/disable ' + requestBody.url + 'for' + apiName + err + '\n' );
            }
            else {
                res.send('Successfully enable/disable ' + requestBody.url + 'for' + apiName + '\n' );
            }
        });
    }

});

router.post('/unregister', (req, res) => {
    const registrationInfo = req.body;
    registrationInfo.url = registrationInfo.protocol + '://' + registrationInfo.host + ':' +
        registrationInfo.port  + '/';
    if (apiAlreadyExists(registrationInfo)) {
        const index = registry.services[registrationInfo.apiName].instances.findIndex((instance) => {
            return registrationInfo.url === instance.url;
        });
        registry.services[registrationInfo.apiName].instances.splice(index, 1);
        fs.writeFile('./routes/registry.json', JSON.stringify(registry), (err) => {
            if (err) {
                res.send('Could not unregister ' + registrationInfo.apiName + '\n' + err);
            }
            else {
                res.send('Successfully unregistered ' + registrationInfo.apiName + '\n');
            }
        });
    }
    else {
        res.send('Configuration already does not exists for ' + 
        registrationInfo.apiName + ' at ' + registrationInfo.url + '\n');
    }
});

router.post('/register', (req, res) => {
    const registrationInfo = req.body;
    registrationInfo.url = registrationInfo.protocol + '://' + registrationInfo.host + ':' +
        registrationInfo.port  + '/';
    if (!registry.services[registrationInfo.apiName]) {
        registry.services[registrationInfo.apiName] = {
            index: 0,
            instances: [],
        };
    }
    if (apiAlreadyExists(registrationInfo)) {
        res.send('Configuration already exists for ' + 
        registrationInfo.apiName + 'at' + registrationInfo.url + '\n');
    }
    else {
        registry.services[registrationInfo.apiName].instances.push({ ...registrationInfo });
        fs.writeFile('./routes/registry.json', JSON.stringify(registry), (err) => {
            if (err) {
                res.send('Could not register ' + registrationInfo.apiName + '\n' + err);
            }
            else {
                res.send('Successfully registered ' + registrationInfo.apiName + '\n');
            }
        });
    }
});

router.all('/:apiName', (req, res) => {
    const service = registry.services[req.params.apiName];
    if (service) {
        if (!service.loadBalanceStrategy) {
            service.loadBalanceStrategy = "ROUND_ROBIN";
            fs.writeFile('./routes/registry.json', JSON.stringify(registry), (err) => {
                if (err) {
                    return res.send('Could not write loadBalanceStrategy ' + err);
                }
            });
        }
        const newIndex = loadbalancer[service.loadBalanceStrategy](service);
        const url = service.instances[newIndex].url;
        axios({
            method: req.method,
            url: url + req.query.path,
            data: req.body,
            headers: {
                Authorization: req.headers['authorization'] ? req.headers['authorization'] : ''
            }
        })
            .then(response => {
                res.send(response.data);
            })
            .catch(err => {
                res.send(err.message);
            })
    }
});

const apiAlreadyExists = (registrationInfo) => {
    let exists = false;
    registry.services[registrationInfo.apiName].instances.forEach(instance => {
        if (instance.url === registrationInfo.url) {
            exists = true;
            return;
        }
    });
    return exists;
};

module.exports = router;