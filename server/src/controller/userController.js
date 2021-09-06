const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserData = require('../models/usersData');
const { userValidation } = require('../validations/signinValidation');
const http = require('../constants/http');

signIn = async (req, res) => {
    try {
        const { name, email, newPassword,
            mobileNumber, age, idProofNumber } = req.body;
        const error = await userValidation(req);
        const newUser = new UserData({
            name, email, newPassword, mobileNumber, age, idProofNumber,
        });
        if (Object.keys(error).length) {
            res.status(http.Bad_Request).json({ error });
        } else {
            res.status(http.Success);
            newUser.save();
            res.end();
        }
    } catch (error) {
        console.log(error);
        res.status(http.Internal_Server_Error);
    }
};

login = (req, res) => {
    try {
        UserData.findOne({
            email : req.body.email,
            newPassword : req.body.password,
        }).then((data) => {
            if (data) {
                let Admin = false;
                if (data.isAdmin == true) {
                    Admin = true;
                }
                const user = { email : data.email };
                const accessToken =
                    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                req.session.user = data.name;
                res.status(http.Success);
                console.log('User Logged in');
                res.json({
                    accessToken : accessToken,
                    isAdmin : Admin,
                    userid : data._id,
                    userName : data.name,
                });
                res.end();
            } else {
                res.status(http.Bad_Request)
                    .json({ err : 'Invalid Login Credentials' });
                res.end();
            }
        }).catch((e) => {
            res.status(http.Bad_Request);
            res.send('Please enter valid credentials');
        });
    } catch (error) {
        console.log(error);
        res.status(http.Internal_Server_Error);
        res.send('Internal Server Error');
    }
};

postUserData = (req, res) => {
    try {
        UserData.findOne({ name : req.query.ID },
        ).then((user) => {
            res.status(http.Success).json({ user });
            res.end();
        }) .catch((e) => {
            res.status(http.Unauthorised);
            res.send(e);
        });
    } catch (error) {
        console.log(error);
        res.status(http.Internal_Server_Error);
        res.send('Internal server error');
    }
};

logout = (req, res) => {
    try {
        console.log('User Logged out successfully');
        req.session.destroy();
    } catch (error) {
        res.status(http.Internal_Server_Error);
        res.send('Internal Server Error');
    }
};

module.exports = { signIn, login, postUserData, logout };
