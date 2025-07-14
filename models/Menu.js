//Designing of the meserver.jsnu schema 
const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sour', 'salty','sweet'],
        required:true
    },
    is_drink:{
        type:Boolean,
        required:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const menuItemSchema= mongoose.model('menuItemSchema',menuSchema );
module.exports=menuItemSchema;