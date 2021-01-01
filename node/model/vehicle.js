const mongoose = require('mongoose');

const vehSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    chassisNum: {
        type: Number,
        required: true
    },
    model: {
        type: Number,
        required: true
    },
    engineCC: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    registered: {
        type: Number,
        required: true
    },
    condition: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    check: {
        type: String,
        required: true
    },
});

const Vehicle = module.exports = mongoose.model('Vehicle', vehSchema);