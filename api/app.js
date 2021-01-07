const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//Middlewares
app.use(bodyParser.json());
// app.use('/api', require('./routes/contactsRoute'))


//Connection with DB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log("Connected with MongoDB ");
    })
    .catch((err) => {
        console.log("Error in with MongoDB ", err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Noogle-Contacts started');
});