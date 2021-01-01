const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    narration:
    {
        type: String,
        required: true
    },
    status:
    {
        type: String,
        required: true
    },
    value:
    {
        type: String,
        required: true
    },
    subAccount:
    {
        type: String,
        required: true
    }
});

const Account = module.exports = mongoose.model('Account', accountSchema);
