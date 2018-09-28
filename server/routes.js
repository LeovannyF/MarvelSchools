const{Student, School} = require('../db/models');
const express = require('express')
const router = express.Router();

//getting all schools and students

router.get('/schools', (req, res, next) => {
  School.findAll({
    include:[{
      model: Student
    }]
  })
  .then(schools => res.send(schools))
  .catch(next);
});

router.get('/students', (req, res, next) => {
  Student.findAll({
    include:[{
      model: School
    }]
  })
  .then(students => res.send(students))
  .catch(next);
});

//getting single school and student

router.get('/school/:id', (req, res, next) => {
  School.findById(req.params.id)
  .then(school => res.send(school))
  .catch(next);
})

router.get('/student/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => res.send(student))
  .catch(next);
});

// deleting single School and single student

router.delete('/school/:id', (req, res, next) => {
  School.findById(req.params.id)
  .then(student => student.destroy())
  .then(() => res.sendStatus(204)) //standard paractice to send a response after deleting
  .catch(next);
})

module.exports = router;
