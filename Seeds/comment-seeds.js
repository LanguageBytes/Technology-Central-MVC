const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Hello"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;