const loadbalancer = {}

loadbalancer.ROUND_ROBIN = (service) => {
    const newIndex = ++service.index >= service.instances.length ? 0 : service.index;
    service.index = newIndex;
    return loadbalancer.isEnabled(service, newIndex, loadbalancer.ROUND_ROBIN);
}

loadbalancer.isEnabled = (service, newIndex, loadBalancerStrategy) => {
    return service.instances[newIndex].enabled ? newIndex : loadBalancerStrategy(service);
}

module.exports = loadbalancer;