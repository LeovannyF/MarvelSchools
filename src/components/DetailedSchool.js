import React from 'react';
import {connect} from 'react-redux';
import {deleteSchool} from'../store';
import {Link} from 'react-router-dom';


const DetailedSchool = ({schoolList, match, deleteSchool}) => {

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

        <div id ='delete'>
          <br />
          <button onClick={()=> deleteSchool(single)}> <Link to='/schools'>Delete </Link> </button>
        </div>
    </div>
  )
}

const mapStateToProps = ({schoolList}) => {
  return {
    schoolList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSchool: (school) => dispatch(deleteSchool(school))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedSchool)
