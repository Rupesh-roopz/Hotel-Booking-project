const mongoose = require('mongoose');

const BookedHotelsSchema = mongoose.Schema({
    hotelName : String,
    dateOfBooking : Date,
    checkInDate : Date,
    checkOutDate : Date,
    typeOfRoom : String,
    TotalBookedRooms : Number,
    totalPrice : Number,
    isBooked : Boolean,
    PaymentStatus : Boolean,
});

module.exports = mongoose.model('BookedHotel', BookedHotelsSchema);
