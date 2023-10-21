import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongooseConnect from "./dbConnect/connection.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));

app.use('/api/v1/postRoutes', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/' , async(req, res) =>{
    res.send('Hii')
})

const startServer = async() => {
    try {
        mongooseConnect(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server running on the port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}

startServer();