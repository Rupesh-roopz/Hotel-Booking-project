const HotelData = require('../models/hotelsData');

async function updateAvailableRooms(hotelName) {
    const updatedRooms = {};
    await HotelData.findOne({hotelName})
        .then((data) => {
            updatedRooms.roomsAvailable = data.roomsAvailable;
        })
        .catch((e)=>{
            console.log(e);
        });
    await HotelData.updateOne({hotelName},
        {roomsAvailable : updatedRooms.roomsAvailable-1});
}

module.exports = {updateAvailableRooms};
