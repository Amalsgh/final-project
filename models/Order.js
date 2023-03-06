const mongoose = require("mongoose") ;

// create schema 
const {Schema , model } = mongoose ;



const OrderSchema = new Schema({

    productname : {
        type: String,  
        required : true 
    },

    price : {
        type: String, 
        required: true,
    } ,
    quantity : {   
        type : Number ,
        required: true,
    }

    
})

module.exports = Order = model('order', OrderSchema)