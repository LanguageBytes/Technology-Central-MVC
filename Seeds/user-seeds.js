const { User } = require('../models');

const userData = [
    {
        username: "SL3",
        twitter: "SL3",
        github: "SL3",
        email: "SL3@gmail.com",
        password: "cats123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;