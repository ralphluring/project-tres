const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

let Place = require('./models/Places');
app.use(cors());
// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/places",{ useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

const placeRoutes = express.Router();
app.use('/places', placeRoutes);

placeRoutes.route('/').get(function(req, res) {
    Place.find(function(err, places) {
        if (err) {
            console.log(err);
        } else {
            res.json(places);
        }
    });
});




const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));