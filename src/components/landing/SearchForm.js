import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div id="homepic" className="contanier">
        <form className="form-center" id="searchBook">
          <div class="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Book Number"
            ></input>
            <div class="input-group-append">
              <button className="btn btn-outline btn-danger">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchForm;
