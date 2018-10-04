import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editStudent} from '../store';

class EditStudent extends Component {
  constructor({student}) {
    super()
    this.state = {
      id: student ? student.id : '',
      firstName: student ? student.firstName : '',
      lastName: student ? student.lastName: '',
      gpa: student ? student.gpa: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this)
  }

  render () {
    if(!this.props.student){
      return null
    }
     return (
       <div>
         <div>
          <h2> Edit Student </h2>
          <hr />
         </div>
       <div id ='container'>
        <form onSubmit = {this.onSave}>
          <label> First Name: </label>
          <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/> <br/>
          <label> Last Name: </label>
          <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} /> <br/>
          <label> GPA: </label>
          <input type='text' name='gpa' value={this.state.gpa} onChange={this.handleChange} /> <br/>
          <button> Save </button>
        </form>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.student && this.props.student) {
      this.setState(this.props.student);
    }
  }

  handleChange(event) {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSave(event) {
    const {editStudent} = this.props;
    //console.log('We are the props', this.props)
    event.preventDefault();
    //console.log(this.state );
    editStudent(this.state);
  }
}

const mapStateToProps = (state, {match, history}) => {
  const student = state.studentList.find(student => student.id === match.params.id*1)
  return{
    student
  };
}

const mapDispatchToProps = (dispatch) => ({
  editStudent: (student) => dispatch(editStudent(student))
})

export default connect (mapStateToProps, mapDispatchToProps)(EditStudent)
