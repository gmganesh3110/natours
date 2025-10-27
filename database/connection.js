const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const DB=process.env.DATABASE_URL;

const connectDB=async()=>{
    try{
        await mongoose.connect(DB);
        console.log('Database connected successfully');
    }catch(err){
        console.error('Database connection failed:',err);
        process.exit(1);
    }
}
module.exports=connectDB;