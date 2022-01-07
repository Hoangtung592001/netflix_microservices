const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
const account = require('./routes/account');
dotenv.config({ path: './config/config.env' });

db.connect();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use('/api', account);

app.listen(PORT, () => {
    console.log(`User Service running on PORT ${PORT}`);
})
