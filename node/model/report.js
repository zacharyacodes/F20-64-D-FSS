const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
date:Date.now,
name:String
});

const Report = module.exports = mongoose.model('Report',reportSchema);