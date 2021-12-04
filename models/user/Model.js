const mongoose = require('mongoose');
const commonSchemaOptions = require( '../../utils/commonSchemaOptions');

const { Schema, model } = mongoose;
const user = new Schema(
    {
        name: String,
        email: String,
        address: Object,
    },
    commonSchemaOptions,
);


const User = model('users', user);

module.exports = User;