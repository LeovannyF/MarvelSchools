const{Student, School} = require('../db/models');
const express = require('express')
const router = express.Router();

//getting all schools and students

router.get('/schools', (req, res, next) => {
  School.findAll()
  .then(schools => res.send(schools))
  .catch(next);
});

router.get('/students', (req, res, next) => {
  Student.findAll()
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
})

module.exports = router;
