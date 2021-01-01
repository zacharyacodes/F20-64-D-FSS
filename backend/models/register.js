const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const RegSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    usertype: {
        type: String,
        required: true
    },
  

});

const Register = module.exports = mongoose.model('register', RegSchema);

