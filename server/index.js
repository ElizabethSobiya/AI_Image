import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/' , async(req, res) =>{
    res.send('Hii')
})

const startServer = async() => {
    app.listen(8080, () => console.log('Server running on the port http://localhost:8080'))
}