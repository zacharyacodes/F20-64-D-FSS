const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const bookgroundSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    timeslots: {
        type: String,
        required: true,
    },
    groundname: {
        type: String,
        required: true,
    },
    iid: {
        type: String,
        required: true,
    },
});

const bookground = module.exports = mongoose.model('bookground', bookgroundSchema);

