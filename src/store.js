import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types

const LOAD_SCHOOLS = "LOAD_SCHOOLS";
const LOAD_STUDENTS = "LOAD_STUDENTS";

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


//store reducers

const SchoolReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_SCHOOLS:
    state = action.schoolList
    break;
  }
  return state
}

const StudentReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_STUDENTS:
    state = action.studentList
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
export {loadSchools, loadStudents}
