import mongoose from "mongoose";

const mongooseConnect = (url) =>{
    mongoose.set('strictQuery', true)

    mongoose.connect(url).then(()=> console.log('MongoDb connected'))
    .catch((err)=> console.log(err))
}

export default mongooseConnect;