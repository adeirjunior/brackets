import mongoose from 'mongoose';
const { Schema, Model } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: {
        type: Date,
        default: Date.now,
    },
    type: String,
});

const Post = new Model('Post', PostSchema);