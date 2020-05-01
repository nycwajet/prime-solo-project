import React from 'react';
import { connect } from 'react-redux';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = ({user}) => (
  
  <div>
    <h1 id="welcome">
      Welcome, { user.username }!
    </h1>
    {/* add user infor ie, first lastname, address */}
    <p>Your ID is: {user.id}</p>
    {/* Add table to display information with edit link*/}
    {/* addDocument button */}
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:

const mapStateToProps = ({user}) => ({ user });

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
