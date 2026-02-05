import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
    {
        nom:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mdp: {
            type: String,
            required: true
        },
        estadmin:{
            type: Number,
            required:true
        },
        telephone:{
            type:String,
            required: true
        }

    }
);

export default mongoose.model("User",userSchema);