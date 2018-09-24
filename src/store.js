import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types

const LOAD_SCHOOLS = "LOAD_SCHOOLS";

//action creators

const _loadSchools = (schoolList) => {
  return {
    schoolList,
    type LOAD_SCHOOLS
  }
}


//thunk creators
const loadSchools = () => {
  axios.get('api/schools')
  .then(response => response.date)
  .then(schools => dispatch(_loadSchools(schools)));
}


//store reducers

const SchoolReducer = (state = [], action) {
  switch(action.typ) {
    case LOAD_SCHOOLS:
    state = action.schoolList
    break;
  }

  return state
}


//combined reducers

const reducer = combineReducers({
  schoolList: SchoolReducer
})


//store

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export {loadSchools}
s
