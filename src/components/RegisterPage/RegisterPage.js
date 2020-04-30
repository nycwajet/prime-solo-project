import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    firstName:'',
    lastName: '',
    employeeId: '',
    email: '', 
    address: '',
    addressLine2:'',
    city:'',
    stateName:'',
    zipCode:'',
    admin: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {

          username: this.state.username,
          password: this.state.password,
          firstName : this.state.firstName,
          lastName: this.state.lastName,
          employeeId: this.state.employeeId,
          email: this.state.email,
          address: this.state.address,
          addressLine2: this.state.addressLine2,
          city: this.state.city,
          stateName: this.state.stateName,
          zipCode: this.state.zipCode,
          admin: this.state.admin

        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fisrtName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="employeeId">
              Employee ID:
              <input
                type="integer"
                name="employeeId"
                value={this.state.employeeId}
                onChange={this.handleInputChangeFor('employeeId')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="address">
              Adress:
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="addressLine2">
              Address Line 2:
              <input
                type="text"
                name="addresssLine2"
                value={this.state.addressLine2}
                onChange={this.handleInputChangeFor('addressLine2')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="stateName">
              State:
              <input
                type="text"
                name="stateName"
                value={this.state.stateName}
                onChange={this.handleInputChangeFor('stateName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zipCode">
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.handleInputChangeFor('zipCode')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="admin">
              Admin:
              <input
                type="text"
                name="admin"
                value={this.state.admin}
                onChange={this.handleInputChangeFor('admin')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

