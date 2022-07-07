const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb://aditya:aditya@cluster0-shard-00-00.0s8k8.mongodb.net:27017,cluster0-shard-00-01.0s8k8.mongodb.net:27017,cluster0-shard-00-02.0s8k8.mongodb.net:27017/?ssl=true&replicaSet=atlas-888sfw-shard-0&authSource=admin&retryWrites=true&w=majority")
}