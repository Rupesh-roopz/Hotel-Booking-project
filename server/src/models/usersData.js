const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name : String,
    email : String,
    passwordHash : String,
    mobileNumber : Number,
    age : Number,
    idProofNumber : Number,
});

module.exports = mongoose.model('UserData', dataSchema);
