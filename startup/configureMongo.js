const mongoose  = require('mongoose');
const config = require('config');



const configureMongo = () => {
    const mongoUrl = process.env.MONGODB_URI

    mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: false,
            useFindAndModify: true,
        }).then(() => {
            console.log('Connected to the database!');
        }).catch(err => {
            console.log('Cannot connect to the database!', err);
        });
}

module.exports = configureMongo;