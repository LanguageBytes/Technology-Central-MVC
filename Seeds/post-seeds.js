const { Post } = require('../models');

const postData = [
    {
        title: "Hello",
        post_content: "Hello there",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;