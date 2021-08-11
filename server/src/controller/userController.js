// const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserData = require('../models/usersData');
// const errorFunction = require('../validations/signinValidation');
let userData = [];

signIn = async (req, res) => {
    try {
        const error = {};
        const {name, email, newPassword, newPasswordVerify,
            mobileNumber, age, idProofNumber} = req.body;

        if (newPassword !==newPasswordVerify) {
            error.passwordError = {
                errorMessage : 'password didn\'t match',
            };
        }
        if (newPassword.length < 6) {
            error.passwordLength = {
                errorMessage : 'password is too short',
            };
        }
        if (mobileNumber.length < 10) {
            error.invalidMobileNumber = {
                errorMessage : 'enter a valid mobile number',
            };
        }
        await UserData.findOne({email : email})
            .then((data) => {
                if (data.email==email) {
                    error.userExists = {
                        errorMessage : 'User Already exists!',
                    };
                }
            })
            .catch((e) => {
                console.log(error);
                res.status(500);
            });

        const newUser = new UserData({
            name, email, newPassword, mobileNumber, age, idProofNumber,
        });
        if (Object.keys(error).length) {
            res.status(400).json({error});
        } else {
            res.status(200);
            console.log('added');
            res.end();
            newUser.save();
        }
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

login = (req, res) => {
    try {
        UserData.findOne({email : req.body.email, password : req.body.password})
            .then((data) => {
                if (data) {
                    userData = data;
                    const user = {email : data.email};
                    const accessToken =
                    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                    res.json({accessToken : accessToken});
                    res.end();
                } else {
                    res.status(401).json({err : 'invalid login credentials'});
                    res.end();
                }
            })
            .catch((e) => {
                res.status(500);
            });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

sendUserData = (req, res) => {
    res.send(userData);
};

module.exports = {signIn, login, sendUserData};
