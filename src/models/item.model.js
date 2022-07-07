const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    code:{type:String,required:false,trim:true},
    name:{type:String,required:false,trim:true},
    price:{type:Number,required:false,trim:true}
})

const item = mongoose.model('itemMaster',itemSchema);
module.exports = item