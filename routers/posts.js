const express = require('express');
// const getPosts = require('../controllers/posts');
// const createPost = require('../controllers/posts');
const postController = require('../controllers/posts');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('ROUTER SUCCESS');
// })


//api: Lấy blog
router.get('/', postController.getPosts);

//api: Tạo blog
router.post('/', postController.createPost);

module.exports = router;