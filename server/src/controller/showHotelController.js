const HotelData = require('../models/hotelsData');

selectedHotel = (req, res) => {
    HotelData.findOne({hotelName : req.body.hotel})
        .then((data) => {
            if (data) {
                selectedHotelData = data;
                res.status(200).json({hotelID : data._id});
                res.end();
            } else {
                res.status(401);
                res.end();
            }
        })
        .catch((e) => {
            res.status(500);
        });
};

sendHotelPreview =(req, res) => {
    HotelData.findOne({_id : req.query.ID})
        .then((data) => {
            if (data) {
                res.status(200).json(data);
                res.end();
            } else {
                res.status(401);
                res.end();
            }
        })
        .catch((e) => {
            res.status(500);
        });
};

module.exports = {selectedHotel, sendHotelPreview};
