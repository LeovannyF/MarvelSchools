const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE || 'postgress://localhost:5432/MarvelSchools');

const Student = db.define('student', {
    firstName: {
      type: Sequelize.STRING
    },

    lastName: {
      type: Sequelize.STRING
    },
    gpa: {
      type: Sequelize.INTEGER
    }

});

const School = db.define('school', {
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
}); 
