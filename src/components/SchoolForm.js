import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createSchool} from '../store';

class SchoolForm extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      address:'',
      moto:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render() {
    return (
      <div>
        <div>
          <h2> CREATE SCHOOL </h2>
          <hr/>
        </div>

        <div id ='container'>
            <form onSubmit={this.handleSubmit}>
              <label> Name: </label>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/> <br/>
              <label> Address: </label>
              <input  type='text' name='address' value={this.state.address} onChange={this.handleChange}/> <br/>
              <label> Moto:</label>
              <input type='text' name='moto' value={this.state.moto} onChange={this.handleChange}/> <br/>
              <button type='submit'> Create </button>
            </form>
        </div>
      </div>
    )
  }

  handleSubmit (event) {
    const {createSchool} = this.props;

    event.preventDefault();
    createSchool(this.state);
    this.setState({
      name:'',
      address:'',
      moto:''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  createSchool: (school) => dispatch(createSchool(school))
})

export default connect (null, mapDispatchToProps)(SchoolForm)
