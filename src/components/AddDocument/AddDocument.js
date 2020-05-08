
//import react

import React, { Component } from "react";
import { connect } from 'react-redux';

 class AddDocument extends Component {

  state={
    documentType:'',
    description:'',
    dateAccomplished:'',
    dateExpiration:'',
  }


  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
   

  handleClick = () => {
    
  };
//popup information: type of ducument, description, date, and expiration
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Add Document</h3>
            <label htmlfor="documentType">Document Type</label>

                 <select id="documentType">
                 <option value="1">Associate</option>
                 <option value="2">Bachelors</option>
                 <option value="3">Masters</option>
                 <option value="4">Certificate</option>
                 <option value="5">Training</option>
                 </select>
            <label htmlfor="description">
                Description:
              <input type="text" 
                     name="description"
                     value={this.state.description}
                     onChange={this.handleInputChangeFor('description')} />
            </label>
            <label htmlFor="dateAccomplished">
                Accomplished Date:
              <input type="date" 
                     name="dateAccomplished"
                     onChange={this.handleInputChangeFor('dateAccomplished')} />
            </label>
            <label htmlFor="dateExpiration">
                Expiration Date:
              <input type="date" 
                     name="dateExpiration" 
                     onChange={this.handleInputChangeFor('dateExpiration')} />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  toggle:state.toggle
});

export default connect(mapStateToProps)(AddDocument);
