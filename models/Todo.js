const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// creates a constructor that is a template for the data in a todo
let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

// creates the todo object and exports it
module.exports = mongoose.model('Todo', Todo);