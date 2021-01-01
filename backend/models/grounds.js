const mongoose = require('mongoose');

const groundSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },


});

const ground = module.exports = mongoose.model('ground', groundSchema);

