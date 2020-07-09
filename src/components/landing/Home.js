import React, { Component } from "react";
import SearchForm from "./SearchForm";
import BookList from "../book-list/List";

class home extends Component {
  render() {
    return (
      <>
        <SearchForm />
        <div className="container">
          <BookList />
        </div>
      </>
    );
  }
}
export default home;
