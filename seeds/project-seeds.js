const { Project } = require('../models');
const sequelize = require('../config/connections');


const projectData = [
  {
    project_name: 'Making Sure Cats Really Meow',
    subject: 'Science',
    ongoing_status: true,
    abstract: "Do cats really go meow?!",
    project_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    collab_status: true,
    user_id: 1,
  },

  {
    project_name: 'Cats Rule, Dogs Drool.',
    abstract: 'Cats are better than dogs and I can prove it',
    subject: 'Science',
    ongoing_status: true,
    project_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    collab_status: true,
    user_id: 1,

  },
  {
    project_name: 'I love cats!',
    abstract: 'They are the best',
    subject: 'Arts',
    ongoing_status: true,
    project_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    collab_status: true,
    user_id: 2
  }
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
