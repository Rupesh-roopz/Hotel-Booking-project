const mongoose = require('mongoose');

const HotelsSchema = mongoose.Schema({
    hotelName : String,
    totalRooms : Number,
    roomsAvailable : Number,
    address : String,
    phone : Number,
    longitude : Number,
    lattitude : Number,
    singleRoom : Number,
    doubleRoom : Number,
    suitRoom : Number,
    description : String,
});

module.exports = mongoose.model('HotelData', HotelsSchema);

