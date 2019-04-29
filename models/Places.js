const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// creates a constructor that is a template for the data about a place
let Place = new Schema({
    place_name: {
        type: String
    },
    place_img: {
        type: String
    },
    place_location: {
        type: [Number]
    },
    place_visited: {
        type: Boolean
    },
    series: {
        type: String
    },
    episode: {
        type: Number
    },
});

// creates the place object and exports it
module.exports = mongoose.model('Place', Place);