const express = require('express');
const router = express.Router();
const UserData = require('../models/usersData');

router
    .route('/signIn')
    .post((req, res) => {
        const data = new UserData({
            name : req.body.name,
            email : req.body.email,
            phoneNumber : req.body.mobileNumber,
            age : req.body.age,
            idProofNumber : req.body.idProofNumber
        });
        data
            .save()
            .then(console.log('data saved in db'))
            .catch((e) => console.error(e));
    })

router
    .route('/login')
    .post((req, res) => {
        UserData.findOne({email : req.body.email})
        .then((data) => {
            if(data) {
            res.writeHead(200)
            console.log(data.email)
            res.end()
            }
            else{
                res.writeHead(401)
                res.end()
            }
        })
        .catch((e) => {
            res.status(500)
        })
    })

module.exports = router;