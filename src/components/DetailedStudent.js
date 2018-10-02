import React from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {Link} from 'react-router-dom';

const DetailedStudent = ({studentList, match, deleteStudent}) => {

  let single = studentList.find(student => {
    return student.id  === +match.params.id
  });

  if(!single){
    return <h1> Loading... </h1>
  }

  return (
    <div>
      <div id='studentView'>
        {single.firstName}
        {single.lastName}
        {single.gpa}
      </div>

      <div id ='delete'>
        <button onClick = {() => deleteStudent(single)}> <Link to='/students'> Delete </Link> </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({studentList}) => {
  return {
    studentList
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (student) => dispatch(deleteStudent(student))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(DetailedStudent)
