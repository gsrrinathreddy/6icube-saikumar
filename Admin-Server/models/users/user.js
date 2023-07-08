import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userschema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        required:true
    },
  
},{timestamps:true} )
export default mongoose.model('User',userschema)