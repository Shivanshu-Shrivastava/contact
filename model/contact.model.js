const mongoose = require('mongoose')
const {User} = require('./User.model')
const Schema = mongoose.Schema

const ContactShema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    data:[{
        name:String,
        email:String,
        phone:Number
    }]

},
    {timestamps:true}
)

const Contact = mongoose.model('Contact',ContactShema)

module.exports = Contact