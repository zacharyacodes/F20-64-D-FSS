const mongoose = require('mongoose');

const equipSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    iid: {
        type: String,
        required: true,
    },
    timeslots: {
        type: String,
        required: true,
    },
    equipName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },

});

const Bookequipment = module.exports = mongoose.model('Bookequipment', equipSchema);

