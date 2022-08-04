const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentSchema = new Schema(
    {
        userId:{
            type: String,
            required: true
        },
        videoId: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        }
    },
    { timestamps: true }
)

module.exports = model('Comment', CommentSchema);