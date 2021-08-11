const express = require('express');
const router = express.Router();
const hotel = require('../controller/hotelController');
const authenticateToken = require('../controller/auth');
// require('dotenv').config();
// const jwt = require('jsonwebtoken');

router
    .route('/add')
    .post(authenticateToken, (req, res) => {
        hotel.add(req, res);
    });

router
    .route('/showHotels')
    .get(authenticateToken, (req, res) => {
        hotel.show(req, res);
    });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == 'null') {
//         return res.status(403).json('token null');
//     }
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, res) => {
//         if (err) {
//             console.log(err);
//             return res.sendStatus(403);
//         };
//         next();
//     });
// }
module.exports = router;
