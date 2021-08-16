const validation = require('../validations/hotelValidation');
const hotel = require('../utils/hotelUtils');
const HotelData = require('../models/hotelsData');

add = async (req, res) => {
    try {
        const {hotelName, totalRooms, roomsAvailable, address,
            phone, Single,
            Double, Suit, description} = req.body;
        const error =await validation.hotelValidation(hotelName, res);
        const newHotel = new HotelData({
            hotelName, totalRooms, roomsAvailable, address,
            phone, Single, Double,
            Suit, description,
        });
        hotel.sendResponse(res, error, newHotel);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

show = (req, res) => {
    HotelData.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
};


module.exports = {
    add, show,
};

