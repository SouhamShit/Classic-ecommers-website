const mongoose = require('mongoose')

const namesSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const NameModel = mongoose.model('name',namesSchema)

module.exports=NameModel;