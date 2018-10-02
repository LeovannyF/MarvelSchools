import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SingleSchool from './SingleSchool';


const SchoolList = ({schoolList}) => {
  return (
    <div>
      <div>
        <ul>
          {
            schoolList.map(school => <SingleSchool key={school.id} school={school}/>)
          }
        </ul>
      </div>
      <div>
        <button><Link to='/createSchool'> Create School</Link></button>
      </div>
    </div>
  );
}

const mapStateToProps = ({schoolList}) => {
  return {
    schoolList
  }
}

export default connect(mapStateToProps)(SchoolList);
