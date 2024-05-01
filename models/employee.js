const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    department_id: {
        type: String,
        required: true
    },
    hire_date: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    

});

module.exports = mongoose.model('employee', postSchema);