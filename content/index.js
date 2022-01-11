const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5002;
const content = require('./routes/content');
const cookieParser = require('cookie-parser');
const axios = require('axios');
dotenv.config({ path: './config/config.env' });

db.connect();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use('/api', content);

app.listen(PORT, async () => {
    await axios.post('http://localhost:5000/register', {
        protocol: 'http',
        host: 'localhost',
        port: PORT,
        apiName: 'contentService',
        enabled: true
    })
    .then(response => {
        console.log(response.data);
    })
    console.log(`Content Service running on PORT ${PORT}`);
})
