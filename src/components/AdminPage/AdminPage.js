//Page needs to import the registration form
import React, { Component } from 'react';
import { connect } from 'react-redux';

//display only if admin rights are given
class AdminPage extends Component {

    render(){

     return(
      <h1>Welcome To Admin {this.props.user.first_name}</h1>
     )}

}

export default connect()(AdminPage);