import express from 'express'
import "dotenv/config"
import mongoDBConnect from './config/mongodb.js'
import bookRoutes from './routes/bookRoutes.js'
import cron from 'node-cron'
import axios from 'axios'


const app = express();

app.use(express.json());

mongoDBConnect();

app.get("/", (req, res)=>{
    res.json({message: "API Working"})
})

app.use('/api', bookRoutes);  


cron.schedule('*/10 * * * *', () => {

  axios.get(`http://localhost:${PORT}`)
    .then((response) => {
      console.log('Server responded:', response.data);
    })
    .catch((error) => {
      console.error('Error calling the server:', error);
    });
});


app.listen(process.env.PORT,()=>{
    console.log(`Server Running at port 5000`);
})
