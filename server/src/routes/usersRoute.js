const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

router
    .route('/signIn')
    .post((req, res) => {
        user.signIn(req, res);
    });

router
    .route('/login')
    .post((req, res) => {
        user.login(req, res);
    })
    .get((req, res) => {
        user.sendUserData(req, res);
    });

module.exports = router;
