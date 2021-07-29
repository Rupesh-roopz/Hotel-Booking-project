const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name : String,
    email : String,
    phoneNumber : Number,
    age : Number,
    idProofNumber : Number  
})

module.exports = mongoose.model('UserData', dataSchema);