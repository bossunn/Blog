const PostModel = require('../models/Postmodel');

const getPosts = async (req, res) => {
    // res.send('ROUTER SUCCESS');
    try {
        const post = new PostModel({
            title: 'test',
            content: 'test',
        });
        post.save();

        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: err });
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost);
        await post.save();
    } catch (error) {
        
    }
}

module.exports = {
    getPosts, 
    createPost,
};