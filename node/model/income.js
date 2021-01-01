const mongoose = require('mongoose');

const incomeSchema=mongoose.Schema({
expenses:Number,
netProfit:Number,

});

const Income=module.exports=mongoose.model('Income',incomeSchema);