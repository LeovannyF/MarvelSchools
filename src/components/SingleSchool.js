import React from 'react';
import {connect} from 'react-redux';
import DetailedSchool from './DetailedSchool';
import {Link} from 'react-router-dom';

const SingleSchool = ({school}) => {
  return (
    <li>
     <Link to={`/schools/${school.id}`}> {school.name}</Link>
    </li>

  )

}

export default SingleSchool
