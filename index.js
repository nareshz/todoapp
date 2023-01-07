const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const tasksRoute = require('./routes/tasks');
const addTaskRoute = require('./routes/addtask');
const modifyTaskRoute = require('./routes/modifytask');

// Middlewares
app.use('/tasks', tasksRoute);
app.use('/addtask', addTaskRoute);
app.use('/modifytask', modifyTaskRoute);

app.get('/', (req, res) => {
    res.send('We are on home of todo app');
});

// Connect to MongoDB database
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_CONN,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB!')
);

// Listen to the server
app.listen(3000);