import mongoose from "mongoose";

export async function Connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection; 
        connection.on('connected', () => {
            console.log("MongoDb connected successfully");
        })

        connection.on('error',(err) =>{
            console.log("MongoDb connection Error. Please make sure MongoDB is running" + err);
            process.exit();
        })
        
    } catch (error) {
        console.log("something goes wrong!");
        console.log(error)
        
    }
    
}