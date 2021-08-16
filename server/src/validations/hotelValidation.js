const HotelData = require('../models/hotelsData');

async function hotelValidation(hotelName, res) {
    const error = {};
    await HotelData.findOne({hotelName : hotelName})
        .then((data) => {
            if (data.hotelName == hotelName) {
                error.hotelExistsError = {
                    errorMessage : 'Hotel already added!',
                };
            }
        })
        .catch((e) => {
            console.log(error);
            res.status(500);
        });
    return error;
}

module.exports = {hotelValidation};
