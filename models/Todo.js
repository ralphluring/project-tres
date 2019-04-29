const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// creates a constructor that is a template for the data in a todo
let Todo = new Schema({
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
    }
});

// creates the todo object and exports it
module.exports = mongoose.model('Todo', Todo);