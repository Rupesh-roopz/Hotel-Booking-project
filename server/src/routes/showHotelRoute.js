const express = require('express');
const router = express.Router();
const hotel = require('../controller/showHotelController');
const authenticateToken = require('../controller/auth');

router
    .route('/hotelPreview')
    .post(authenticateToken, (req, res) => {
        console.log(req.body.data);
        hotel.selectedHotel(req, res);
    })
    .get(authenticateToken, (req, res) => {
        hotel.sendHotelPreview(req, res);
    });

module.exports = router;
