import mongoose from "mongoose"
const { Schema, model }= mongoose

const vehicleSchema = new Schema({
    chasisNumber:{
        type:String,
        required:true,
        unique: true
    },
    manufactureCompany:{
        type:String,
        required:true
    },
    manufactureYear:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    modelName:{
        type:String,
        required: true,
        unique: true
    }
},
{timestamps:true}
)

export const Vehicle = model('vehicle',vehicleSchema)
