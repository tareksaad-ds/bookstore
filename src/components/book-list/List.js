import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../../actions/bookActions";
import BookItem from "../book-item/Item";

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;
    const booksList = books.slice(0, 9);
    return (
      <div className="row">
        {(booksList.length === 0 && <h1>Loading ..</h1>) ||
          booksList.map((book) => <BookItem key={book.ID} book={book} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default connect(mapStateToProps, { getBooks })(BookList);
