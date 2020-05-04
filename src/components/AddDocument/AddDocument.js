
//import react

import React, { Component } from "react";
import { connect } from 'react-redux';

export default class AddDocument extends Component {
  handleClick = () => {
    this.props.toggle();
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
            <label>
                Document Type:
              <input type="text" name="type" />
            </label>
            <label>
                Description:
              <input type="text" name="description" />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddDocument);
