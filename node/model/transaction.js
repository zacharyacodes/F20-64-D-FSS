const mongoose = require('mongoose');

const transactionSchema=mongoose.Schema({
accountType:String
});

const Transaction = module.exports=mongoose.model('Transaction',transactionSchema);