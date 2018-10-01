import React from 'react';
import {connect} from 'react-redux';
import SingleStudent from './SingleStudent';
import {Link} from 'react-router-dom';



const StudentList = ({studentList}) => {
  return (
    <div>
      <div>
        <ul>
          {
            studentList.map(student => <SingleStudent key={student.id} student={student}/>)
          }
        </ul>
      </div>
      <div>
        <button> <Link to='/createStudent'> New Student </Link></button>
      </div>
  </div>
  )
}

const mapStateToProps = ({studentList}) => {
  return {
    studentList
  }
}

export default connect(mapStateToProps)(StudentList)
