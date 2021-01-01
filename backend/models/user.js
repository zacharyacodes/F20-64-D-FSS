const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
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
    
    // bn: {
    //     type: String,
    //     required: true
    // },
    usertype: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
  

});

const User = module.exports = mongoose.model('User', userSchema);




// module.exports.getUserByEmail = function (email, callback) {

//     const query = { email: email }
//     User.findOne(query, callback);
// }



// module.exports.comparePassword = function (candidatePassword, hash, callback) {

//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//         if (err) throw err;
//         callback(null, isMatch);

//     });
// }
// module.exports.addUser = function (newUser, callback) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }


