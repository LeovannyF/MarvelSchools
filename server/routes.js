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
  console.log(' WE ARE THE POST',req.body);
  let newStudent = req.body;
  Student.create(newStudent)
  .then(newStudent => {
    res.json(newStudent)
  });
})

router.post('/school', (req, res, next) => {
  let newStudent = req.body
  School.create ({
      name: req.body.name,
      address: req.body.address,
      moto: req.body.moto
    }).then()
})

module.exports = router;
