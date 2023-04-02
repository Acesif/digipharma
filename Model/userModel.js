import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    medicineID:{
        type: Number,
        required: true,
        unique: true
    },
    description:{
        type: String,
        default: ""
    }
},{timestamps: true})

export default mongoose.model('medicines', userSchema)