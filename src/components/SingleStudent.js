import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const SingleStudent = ({student}) => {
  return (
    <li> 
      <Link to={`/students/${student.id}`}> {student.firstName} {student.lastName}</Link>
    </li>
  )
}

export default SingleStudent
