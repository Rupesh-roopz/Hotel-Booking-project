// const bcrypt = require('bcrypt');
require('dotenv').config();
const UserData = require('../models/usersData');
const userNew = require('../validations/signinValidation');
const user = require('../utils/userUtils');

signIn = async (req, res) => {
    try {
        const {name, email, newPassword,
            mobileNumber, age, idProofNumber} = req.body;
        const error = await userNew.validation(name, email, res);
        const newUser = new UserData({
            name, email, newPassword, mobileNumber, age, idProofNumber,
        });
        user.sendNewUserResponse(res, error, newUser);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

login = (req, res) => {
    try {
        UserData.findOne({
            email : req.body.email,
            newPassword : req.body.password,
        }).then((data) => {
            user.sendLoginResponse(data, res);
        }).catch((e) => {
            res.status(500);
        });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

postUserData = (req, res) => {
    try {
        UserData.findOne({name : req.query.ID},
        ).then((user) => {
            res.status(200).json({user});
            res.end();
        }) .catch((e) => {
            res.status(500);
        });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

module.exports = {signIn, login, postUserData};
