const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE || 'postgres://localhost:5432/MarvelSchools', {logging:false});
const {studentData, schoolData} = require('./seed');

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
  moto: {
    type: Sequelize.STRING
  }
});

const syncSeed = async () => {
  await db.sync({force:true})

  const [thor, tony, black, captain] = await Promise.all(studentData.map(student => {
    return Student.create(student);
  }));
  const [bronx, brooklyn, manhattan] = await Promise.all(schoolData.map(school => {
    return School.create(school);
  }));
}


module.exports = {
  Student,
  School,
  syncSeed,
}
