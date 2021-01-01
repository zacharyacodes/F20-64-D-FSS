const mongoose = require('mongoose');

const sportsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    equipments: {
        type: String,
        required: true,
    },

});

const sport = module.exports = mongoose.model('sports', sportsSchema);

