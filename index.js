const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config({path:'./.env'});

const app=express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION
const connection=require('./database/connection');
connection();

// ROUTES
app.get('/',(req,res)=>{
    res.send('Natours API is running');
});

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});