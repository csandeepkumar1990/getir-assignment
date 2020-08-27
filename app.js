const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// create express app
const app = express();

var cors = require('cors')
app.use(cors()); 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
//app.use(express.static('public'));
//app.use('/public', express.static(path.join(__dirname, 'public')))

//Swagger Confguration
const swaggerDoc = require('./swaggerDoc');
swaggerDoc(app);


// Configuring the database
const dbConfig = require('./configs/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Successfully connected to the database");    
   }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api", require("./routes/index"));
//app.use(express.static('public'));

// app.get('*', (_req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

