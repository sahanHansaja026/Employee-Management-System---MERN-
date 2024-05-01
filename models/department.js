const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: true
    },
    department_id: {
        type: String,
        required: true
    },
    department_head: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    operating_hours: {
        type: String,
        required: true
    },
    total_number_of_employees: {
        type: String,
        required: true
    },
    

});

module.exports = mongoose.model('department', postSchema);