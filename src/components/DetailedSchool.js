import React from 'react';
import {connect} from 'react-redux';
import {deleteSchool, deleteStudent} from'../store';
import {Link} from 'react-router-dom';


const DetailedSchool = ({schoolList, match, deleteSchool, deleteStudent}) => {

  let single = schoolList.find(school => {
    return school.id === +match.params.id
  });

  return (
    <div>
        <div id='schoolView'>
          <br />
        {single.name} <br />
        {single.address} <br />
        {single.moto}
        </div>
        <br />

        <div id='studentView'>
        {single.students.map(student => {
          return  <li key= {student.id}> {student.firstName}  <button onClick = {() => deleteStudent(student)}>  <Link to='/schools'> x </Link> </button> </li>
        })}
        </div>

        <div id ='delete'>
          <br />
          <button onClick={()=> deleteSchool(single)}> <Link to='/schools'>Delete </Link> </button>
        </div>
    </div>
  )
}

const mapStateToProps = ({schoolList, studentList}) => {
  return {
    schoolList,
    studentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSchool: (school) => dispatch(deleteSchool(school)),
    deleteStudent: (student) => dispatch(deleteStudent(student))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedSchool)
