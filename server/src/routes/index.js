const express = require( 'express');
const app = express();

const users = require('./usersRoute');
const hotels = require('./hotelsRoute');
const bookedHotel = require('./bookedHotelRoute');
const showHotel = require('./showHotelRoute');


const router = () => {
    app.use('/user', users);
    app.use('/hotels', hotels);
    app.use('/bookedHotel', bookedHotel);
    app.use('/hotel', showHotel);

    return app;
};

module.exports = router;
