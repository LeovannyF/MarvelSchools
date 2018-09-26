import React from 'react';
import {connect} from 'react-redux';


const SchoolList = ({schoolList}) => {
  return (
      <ul>
        {
          schoolList.map(school => <li key={school.id}> {school.name} ({school.students.length}) </li>)
        }
      </ul>
  )
}

const mapStateToProps = ({schoolList}) => {
  return {
    schoolList
  }
}

export default connect(mapStateToProps)(SchoolList);
