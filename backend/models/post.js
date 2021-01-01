const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imagesname: {
        type: String,
        required: true,
    },

});

const post = module.exports = mongoose.model('post', postSchema);

