import { Mongoose } from "mongoose";
import { type } from "os";
import { deflate } from "zlib";


const userSchema = new Mongoose.Schema({
    username:{
        type: String,
        required : [true, "please providea username"],
        unique: true,
    },
    email : {
        type: String,
        required : [true, "please providea email"],
        unique: true,
    },
    password : {
        type: String,
        required : [true, "please providea password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifiedToken: String,
    verifiedTokenExpire: Date

    

})

const User = Mongoose.Models.users || mongoose.model("users", userSchema);

export default User;