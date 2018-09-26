import React from 'react';
import {connect} from 'react-redux'


const StudentList = ({studentList}) => {
  console.log('I AM HERE', studentList)
  return (
    <ul>
      {
        studentList.map(student => <li key={student.id}> {student.firstName}</li>)
      }
    </ul>
  )
}

const mapStateToProps = ({studentList}) => {
  return {
    studentList
  }
}

export default connect(mapStateToProps)(StudentList)
