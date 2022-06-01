import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectorFile: String,
    likeCount: {
        type: Number,
        fefault: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }

});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;