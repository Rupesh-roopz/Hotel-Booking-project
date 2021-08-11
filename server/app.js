const express = require( 'express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./src/routes/index');

const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());
app.use('/', router());

mongoose.connect('mongodb://localhost:27017/HotelBooking', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

app.listen(port, () => {
    console.log('Connected to the server');
} );


