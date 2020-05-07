
//import react

import React, { Component } from "react";
import { connect } from 'react-redux';

 class AddDocument extends Component {


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
            <label>
                Description:
              <input type="text" name="description" />
            </label>
            <label>
                Accomplished Date:
              <input type="date" name="dateAccomplished" />
            </label>
            <label>
                Expiration Date:
              <input type="date" name="dateExpiration" />
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
