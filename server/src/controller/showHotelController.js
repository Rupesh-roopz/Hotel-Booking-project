const HotelData = require('../models/hotelsData');

let selectedHotelData = [];

selectedHotel = (req, res) => {
    console.log(req.body.hotel);
    HotelData.findOne({hotelName : req.body.hotel})
        .then((data) => {
            if (data) {
                selectedHotelData = data;
                res.writeHead(200);
                res.end();
            } else {
                res.writeHead(401);
                res.end();
            }
        })
        .catch((e) => {
            res.status(500);
        });
};

sendHotelPreview =(req, res) => {
    res.send(selectedHotelData);
};

module.exports = {selectedHotel, sendHotelPreview};
