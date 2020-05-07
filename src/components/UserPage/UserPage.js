import React from 'react';
import { connect } from 'react-redux';
import AddDocument from '../AddDocument/AddDocument';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => ( 
   
  
  <div>
    <h1 id="welcome">
     { props.user.first_name } { props.user.last_name } 
    </h1>
    <h2>Employee ID: { props.user.employee_id }</h2>
    {/* add user infor ie, first lastname, address */}
    <p>Your ID is: {props.user.id}</p>
    {/* Add table to display information with edit link*/}
    {/* addDocument button */}
    { JSON.stringify(props.user) }
    {JSON.stringify(props.documents)}
    <AddDocument />
 </div>

); // This ends the render for the User Page. Keep all the JSX inside here.


const mapStateToProps = state => ({ 
  user: state.user,
  // add reducer for your documents
  // documents,
  documents: state.documents,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
