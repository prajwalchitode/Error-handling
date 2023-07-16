
import mongoose from "mongoose";

const schema = new mongoose.Schema({
name:"String",
email:{
    type:"String",
    unique:true
}
})

export const User = new mongoose.model('User',schema);