require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == 'null') {
        return res.status(403).json('token null');
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, res) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        };
        next();
    });
}

module.exports = authenticateToken;
