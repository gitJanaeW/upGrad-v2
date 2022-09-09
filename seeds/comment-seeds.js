const {Comment} = require('../models');
const sequelize = require('../config/connections');

const commentData = [
    {
        body: 'I\'ve been wondering the same thing!!',
        user_id: 2,
        project_id: 1
    },
    {
        body: 'Interesting... Very interesting.',
        user_id: 1,
        project_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;