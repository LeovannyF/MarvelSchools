import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types

const LOAD_SCHOOLS = "LOAD_SCHOOLS";
const LOAD_STUDENTS = "LOAD_STUDENTS";
const DELETE_SCHOOL = "DELETE_SCHOOL";
const DELETE_STUDENT = "DELETE_STUDENT";
const CREATE_STUDENT = "CREATE_STUDENT";

//action creators

const _loadSchools = (schoolList) => {
  return {
    schoolList,
    type: LOAD_SCHOOLS
  }
}

const _loadStudents = (studentList) => {
  return {
    studentList,
    type: LOAD_STUDENTS
  }
}

const _deleteSchool = (school) => {
  return {
    school,
    type: DELETE_SCHOOL
  }
}

const _deleteStudent = (student) => {
  return {
    student,
    type: DELETE_STUDENT
  }
}

const _createStudent = (student) => {
  return {
    student,
    type: CREATE_STUDENT
  }
}

//thunk creators
const loadSchools = () => {
  return(dispatch) => {
    axios.get('api/schools')
  .then(response => response.data)
  .then(schools => dispatch(_loadSchools(schools)));
  }
}

const loadStudents = () => {
  return(dispatch) => {
    axios.get('api/students')
    .then(response => response.data)
    .then(students => dispatch(_loadStudents(students)));
  }
}

const deleteSchool = (school) => {
  return(dispatch)=> {
    axios.delete(`api/school/${school.id}`)
    .then(() => dispatch(_deleteSchool(school)))
  }
}

const deleteStudent = (student) => {
  return(dispatch) => {
    axios.delete(`api/student/${student.id}`)
    .then(() => dispatch(_deleteStudent(student)))
  }
}

const createStudent = (student) => {
  return (dispatch) => {
    axios.post('/api/student', student)
    .then(response => response.data)
    .then(newStudent => dispatch(_createStudent(newStudent)))
  }
}


//store reducers

const SchoolReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_SCHOOLS:
    state = action.schoolList
    break;

    case DELETE_SCHOOL:
    state = state.filter(school => school.id !== action.school.id)
    break;
  }
  return state
}

const StudentReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_STUDENTS:
    state = action.studentList
    break;

    case DELETE_STUDENT:
    state = state.filter(student => student.id !== action.student.id)
    break;

    case CREATE_STUDENT:
    state = [...state, action.student]
    break;
    
  }
  return state
}


//combined reducers

const reducer = combineReducers({
  schoolList: SchoolReducer,
  studentList: StudentReducer
})


//store

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export {loadSchools, loadStudents, deleteSchool, deleteStudent, createStudent}
