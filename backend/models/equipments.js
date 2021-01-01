const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const equipmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },

});

const equipment = module.exports = mongoose.model('equipment', equipmentSchema);

