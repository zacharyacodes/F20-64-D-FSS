const mongoose = require('mongoose');

const BusinessSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    businessType: {
        type: String,
        required: true
    }
});

const Business = module.exports = mongoose.model('Business', BusinessSchema);