const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mogoURI;

//connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000; //for HEROKU or locally on port 5000.

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
