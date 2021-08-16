const jwt = require('jsonwebtoken');

function sendNewUserResponse(res, error, newUser) {
    if (Object.keys(error).length) {
        res.status(400).json({error});
    } else {
        res.status(200);
        newUser.save();
        res.end();
    }
}

function sendLoginResponse(data, res) {
    if (data) {
        let Admin = false;
        if (data.isAdmin == true) {
            Admin = true;
        }
        const user = {email : data.email};
        const accessToken =
            jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.status(200);
        res.json({
            accessToken : accessToken,
            isAdmin : Admin,
            userid : data._id,
            userName : data.name,
        });
        res.end();
    } else {
        res.status(401).json({err : 'Invalid Login Credentials'});
        res.end();
    }
}


module.exports ={sendNewUserResponse, sendLoginResponse};
