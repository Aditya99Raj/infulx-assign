const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    code:{type:String,required:false,trim:true},
    qty:{type:Number,required:false,trim:true},
    // unitPrice:{type:Number,required:true,trim:true},
    // totalAmt:{type:Number,required:true,trim:true}
})

const usecart = mongoose.model('useCart',cartSchema);
module.exports = usecart