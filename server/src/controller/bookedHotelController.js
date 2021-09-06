const BookedHotel = require('../models/bookedHotels');
const http = require('../constants/http');
const { updateAvailableRooms } = require('../utils/bookedHotelUtil');

booked = async (req, res) => {
    try {
        const { hotelName, recipientName, dateOfBooking, checkInDate,
            checkOutDate, typeOfRoom, totalPrice, totalDays,
        } = req.body;
        const bookedHotel = new BookedHotel({
            hotelName, recipientName, dateOfBooking, checkInDate, checkOutDate,
            typeOfRoom, totalPrice, totalDays,
        });
        bookedHotel.save();
        res.json({ bookedHotelId : bookedHotel._id });
        updateAvailableRooms(hotelName);
        res.status(http.Success);
        res.end();
    } catch (error) {
        res.status(http.Bad_Request);
        res.send('Internal Server Error');
    }
};

list= (req, res) => {
    BookedHotel.find({ recipientName : req.query.ID })
        .then((data) => {
            res.status(http.Success);
            res.json(data);
            res.end();
        })
        .catch((e) => {
            res.status(http.Bad_Request);
            res.send(e);
        });
    res.end;
};

view = (req, res) => {
    BookedHotel.findOne({ _id : req.query.ID })
        .then((data) => {
            res.status(http.Success);
            res.json(data);
            res.end();
        })
        .catch((e) => {
            res.status(http.Bad_Request);
            res.send(e);
        });
    res.end;
};


module.exports = {
    booked, view, list,
};
