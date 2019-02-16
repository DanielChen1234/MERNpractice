const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

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

//Serve static assets if we're in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        //load index html anything that we get that isnt app.use('/api/items', items)
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // go to client. go to build. go to index html
    })
}

const port = process.env.PORT || 5000; //for HEROKU or locally on port 5000.

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
