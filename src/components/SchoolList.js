import React from 'react';
import {connect} from 'react-redux';
import SingleSchool from './SingleSchool';


const SchoolList = ({schoolList}) => {
  return (
      <ul>
        {
          schoolList.map(school => <SingleSchool key={school.id} school={school}/>)
        }
      </ul>
  );
}

const mapStateToProps = ({schoolList}) => {
  return {
    schoolList
  }
}

export default connect(mapStateToProps)(SchoolList);
