const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

require('./routes/tasks')(app);

app.get('/', (req, res) => {
    res.send('TODO App: Home');
});

// Listen to the server
app.listen(3000);