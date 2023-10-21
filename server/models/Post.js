import mongoose from "mongoose";

const post = new mongoose.Schema({
    post: {type: String, required: true},
    prompt: {type: String, required: true},
    pictures: {type: String, required: true}
})

const postScheme = mongoose.model('Post', post)

export default postScheme;