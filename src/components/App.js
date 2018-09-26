import React, {Component} from 'react';
import store, {loadSchools, loadStudents} from '../store';
import {Provider} from 'react-redux';
import SchoolList from './SchoolList';
import StudentList from './StudentList';
import {HashRouter, Route, Link} from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadSchools());
    store.dispatch(loadStudents());
  }
  render() {
    return (
    <Provider store={store}>
      <HashRouter>
          <div id='container'>
            <div id='nav-bar'>
              <button> <Link to='/schools'> Schools </Link> </button>
              <button> <Link to='/students'> Students </Link> </button>
            </div>

            <div id='nav-helper'>
              <Route path='/schools' component = {SchoolList}/>
              <Route path='/students' component = {StudentList}/>
            </div>
          </div>

      </HashRouter>
    </Provider>
    )
  }
}

export default App
