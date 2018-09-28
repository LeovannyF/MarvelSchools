import React, {Component} from 'react';
import store, {loadSchools, loadStudents} from '../store';
import {Provider, connect} from 'react-redux';
import SchoolList from './SchoolList';
import StudentList from './StudentList';
import DetailedSchool from './DetailedSchool';
import {HashRouter, Route, Link} from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadSchools());
    store.dispatch(loadStudents());
  }

  render() {
    return (
      <HashRouter>
          <div id='container'>
            <div id='nav-bar'>
              <button> <Link to ='/'> Home </Link></button>
              <button> <Link to='/schools'> Schools ({this.props.schoolList.length}) </Link> </button>
              <button> <Link to='/students'> Students ({this.props.studentList.length}) </Link> </button>
            </div>

            <div id='nav-helper'>
              <Route exact path='/schools' component = {SchoolList}/>
              <Route path='/students' component = {StudentList}/>
              <Route path='/schools/:id' component = {DetailedSchool}/>
              <Route exact path = '/'/>
            </div>
          </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = ({schoolList, studentList}) => {
  return {
    schoolList,
    studentList
  }
}

export default connect(mapStateToProps)(App)
