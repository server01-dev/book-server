import express from 'express';
import "dotenv/config"
import mongoDBConnect from './config/mongodb.js';
import bookRoutes from './routes/bookRoutes.js'


const app = express();

app.use(express.json());

mongoDBConnect();

app.get("/", (req, res)=>{
    res.json({message: "API Working"})
})

app.use('/api', bookRoutes);  


app.listen(process.env.PORT,()=>{
    console.log(`Server Running at port 5000`);
})