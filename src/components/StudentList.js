import React from 'react';
import {connect} from 'react-redux'



const StudentList = ({studentList}) => {
  return (
    <ul>
      {
        studentList.map(student => <li key={student.id}> {student.firstName} {student.lastName}</li>)
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
