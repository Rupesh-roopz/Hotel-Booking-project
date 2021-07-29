const express = require ( 'express');
const cors = require('cors')
const users = require('./routes/users');
const mongoose = require('mongoose');
const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());

app.use('/users', users);

mongoose.connect('mongodb://localhost:27017/HotelBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    
// app.get('/', (req, res) => {
//     UserData.find({}).then(data => {
//         res.send(data)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })

app.listen(port,()=> {
    console.log("Connected to the server")
} )


