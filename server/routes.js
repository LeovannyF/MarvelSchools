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
  .then(school => school.destroy())
  .then(() => res.sendStatus(204)) //standard paractice to send a response after deleting
  .catch(next);
})

router.delete('/student/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => student.destroy())
  .then(() => res.sendStatus(204))
  .catch(next);
})

//posting, creating students and schools

router.post('/student', (req, res, next) => {
  let newStudent = req.body;

  Student.create(newStudent)
  .then(newStudent => {
    res.json(newStudent)
  });
})

router.post('/school', (req, res, next) => {
  let newSchool = req.body;

  School.create(newSchool)
  .then( newSchool => {
    res.json(newSchool)
  });
})

//updating, Schools and Students

router.put('/student/:id', (req, res, next) =>{
  let student = req.body
  console.log('I am Params', req.params.id)

  Student.update(student,
    {
      where: { id: req.params.id},
      returning: true,
      plain: true
    })
    .then(arr => {
      console.log('I am the student',arr[1])
      res.json(arr[1])})
    .catch(next)
})

router.put('/school/:id', (req, res, next) => {
  let school = req.body;

  School.update(school,
    {
      where: { id: req.params.id }
    })
    .then(school => {res.json(school)})
})

module.exports = router;
