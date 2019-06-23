const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todolist');
const url = 'mongodb://localhost/todolist';

app.use(todoRoutes);


mongoose.connect(url,{ useNewUrlParser: true })
.then(res =>
    {
        console.log('connected');
        app.listen(port);
    })
    .catch(err =>{
        console.log(err);
    });











