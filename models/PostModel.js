const mongoose = require('mongoose');

const postScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const PostModel = mongoose.model('posts', postScheme);
module.exports = PostModel;


// để như vậy là sai vì chưa có PostModel phải làm như trên.
// module.exports = mongoose.model('posts', scheme);