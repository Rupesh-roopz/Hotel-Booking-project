const BookedHotel = require('../models/bookedHotels');
const hotel = require('../utils/bookedHotelUtil');

booked = async (req, res) => {
    try {
        const {hotelName, recipientName, dateOfBooking, checkInDate,
            checkOutDate, typeOfRoom, totalPrice, totalDays,
        } = req.body;
        const bookedHotel = new BookedHotel({
            hotelName, recipientName, dateOfBooking, checkInDate, checkOutDate,
            typeOfRoom, totalPrice, totalDays,
        });
        bookedHotel.save();
        res.json({bookedHotelId : bookedHotel._id});
        hotel.updateAvailableRooms(hotelName);
        res.status(200);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

list= (req, res) => {
    BookedHotel.find({recipientName : req.query.ID})
        .then((data) => {
            res.status(200);
            res.json(data);
            res.end();
        })
        .catch((e) => {
            res.status(500);
        });
    res.end;
};

view = (req, res) => {
    BookedHotel.findOne({_id : req.query.ID})
        .then((data) => {
            res.status(200);
            res.json(data);
            res.end();
        })
        .catch((e) => {
            res.status(500);
        });
    res.end;
};


module.exports = {
    booked, view, list,
};
