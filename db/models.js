const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/MarvelSchools', {logging:false});
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

  const [thor, tony, hulk, black, captain] = await Promise.all(studentData.map(student => {
    return Student.create(student);
  }));
  const [bronx, brooklyn, manhattan] = await Promise.all(schoolData.map(school => {
    return School.create(school);
  }));

  thor.setSchool(bronx)
  tony.setSchool(manhattan)
  black.setSchool(brooklyn)
  captain.setSchool(brooklyn)
  hulk.setSchool(bronx)

}

Student.belongsTo(School)
School.hasMany(Student)

module.exports = {
  Student,
  School,
  syncSeed,
}
