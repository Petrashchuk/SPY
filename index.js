const express = require('express');
const config = require('config');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const routers = require('./routers');
const configureMongo = require('./startup/configureMongo');

dotenv.config();

const PORT = process.env.PORT || config.get('port');


const app = express();

(()=>{
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
    app.use(bodyParser.json())
    configureMongo();

    app.use(express.static(__dirname + '/public'));

    app.use(routers)

})()


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});