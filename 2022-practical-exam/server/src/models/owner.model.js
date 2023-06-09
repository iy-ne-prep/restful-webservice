import mongoose from "mongoose"
const { Schema, model }= mongoose

const ownerSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        minLength: 10,
        maxLength: 10,
        required:true
    },
    nationalId:{
        type:String,
        minLength: 16,
        maxLength: 16,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

export const Owner = model('owner',ownerSchema)
