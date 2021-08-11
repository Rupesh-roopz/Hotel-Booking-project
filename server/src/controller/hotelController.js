const HotelData = require('../models/hotelsData');

add = (req, res) => {
    try {
        const {
            hotelName,
            totalRooms,
            roomsAvailable,
            address,
            phone,
            longitude,
            lattitude,
            singleRoom,
            doubleRoom,
            suitRoom,
            description,
        } = req.body;


        const newHotel = new HotelData({
            hotelName,
            totalRooms,
            roomsAvailable,
            address,
            phone,
            longitude,
            lattitude,
            singleRoom,
            doubleRoom,
            suitRoom,
            description,
        });

        // const savedHotel = await newHotel.save();
        newHotel.save();
        res.status(200);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

show = (req, res) => {
    HotelData.find({})
        .then((data) => {
            res.send(data);
            // console.log(data);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
};


module.exports = {
    add, show,
};

