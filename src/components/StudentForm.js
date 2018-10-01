import React, {Component} from 'react';
import {connect} from 'react-redux';

class StudentForm extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
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
            <input type='text' name='firstName' value={this.state.firstName} /> <br/>
            <label> Last Name: </label>
            <input type='text' name='lastName' value={this.state.lastName} /> <br/>
            <label> GPA:  </label>
            <input type='number' name= 'gpa' value={this.state.gpa} /> <br/>
            <button type='submit'> Create</button>
          </form>
        </div>
      </div>

    )
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/student', this.state)
    .then
    this.setState({
      firstName:'',
      lastName:'',
      gpa:0
    })
  }

  handleChange(event) {
      this.setState({
        [event.target.name] : event.target.value
      })
  }
}

export default StudentForm
