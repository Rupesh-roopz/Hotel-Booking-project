require('dotenv').config();
const jwt = require('jsonwebtoken');
const http = require('../constants/http');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == 'null') {
        res.status(http.Forbidden);
        return;
    }
    if (req.session.user === undefined) {
        console.log('User session expired');
        req.session.destroy();
        return res.sendStatus(http.Unauthorised);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, res) => {
        if (err) {
            res.status(http.Unauthorised);
            return;
        };
        next();
    });
}

module.exports = authenticateToken;
