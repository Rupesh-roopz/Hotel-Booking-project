const express = require( 'express');
const mongoose = require('mongoose');
const cors = require('cors');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./src/routes/index');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin : process.env.ORIGIN,
    credentials : true,
}));
app.use(express.json());
app.use(cookieParser());

// app.use(session({
//     secret : process.env.SESSION_SECRET,
//     saveUninitialized : false,
//     resave : false,
//     cookie : { maxAge : 360000, httpOnly : false },
// }));

app.use('/', router());

mongoose.connect(connectionString, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

app.listen(port, () => {
    console.log(`Connected to the server ${port}`);
} );


