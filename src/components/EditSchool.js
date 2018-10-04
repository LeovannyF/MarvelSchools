import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editSchool} from '../store';


class EditSchool extends Component {
  constructor({school}) {
    super()
    this.state = {
      id: school ? school.id : '',
      name: school ? school.name : '',
      address: school ? school.address : '',
      moto: school ? school.moto : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  render() {
    if(!this.props.school){
      return null
    }
    return(
      <div>
        <div id='heading'>
          <h2> Edit School</h2>
        </div>
        <hr />
        <div id ='container'>
          <form onSubmit ={this.onSave}>
            <label> School Name: </label>
            <input type='text' name='name' value ={this.state.name} onChange={this.handleChange}/> <br />
            <label> School Address: </label>
            <input type='text' name='address' value={this.state.address} onChange={this.handleChange}/> <br />
            <label> School Moto: </label>
            <input type='text' name='moto' value={this.state.moto} onChange={this.handleChange} /> <br />
            <button> Save </button>
          </form>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.school && this.props.school){
      this.setState(this.props.school)
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  onSave(event) {
    const {editSchool} = this.props;
    event.preventDefault();
    editSchool(this.state);
  }

}

const mapStateToProps = (state, {match, history}) => {
  const school = state.schoolList.find(school => school.id === match.params.id*1)
  return{
    school
  };
}

const mapDispatchToProps = (dispatch) => ({
  editSchool: (school) => dispatch(editSchool(school))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditSchool)
