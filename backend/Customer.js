const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    Customername: {
        type: String, 
        required: true
    }, 

    email: {
        type: String, 
        required: true
    }, 
    gender: {
        type: String, 
        required: true
    },
    DOB: {
        type: String, 
        required: true
    },
    phonenumber: {
        type: String, 
        required: true
    }, 
    password: {
        type: Number, 
        required: true
    },

    

   


}); 

const customerModel = mongoose.model("addcustomers", customerSchema); 

module.exports = customerModel; 