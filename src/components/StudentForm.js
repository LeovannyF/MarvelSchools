import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStudent} from '../store'

class StudentForm extends Component {
  constructor () {
    super()
    this.state = {
      firstName:'',
      lastName:'',
      gpa: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <h2> CREATE STUDENT </h2>
          <hr />
        </div>

        <div id='container'>
          <form onSubmit={this.handleSubmit}>
            <label> First Name: </label>
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/> <br/>
            <label> Last Name: </label>
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/> <br/>
            <label> GPA:  </label>
            <input type='number' name='gpa' value={this.state.gpa} onChange={this.handleChange}/> <br/>
            <button type='submit'> Create </button>
          </form>
        </div>
      </div>

    )
  }
  handleSubmit(event) {
    const {createStudent} = this.props;

    event.preventDefault();
    console.log('I AM THE CREATE STUDENT ', this.state)
    createStudent(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      gpa: 0
    });
  }

  handleChange(event) {
      this.setState({
        [event.target.name] : event.target.value
      })
  }
}

const mapDispatchToProps = (dispatch) => ({
  createStudent: (student) => dispatch(createStudent(student))
})

export default connect(null, mapDispatchToProps)(StudentForm)
