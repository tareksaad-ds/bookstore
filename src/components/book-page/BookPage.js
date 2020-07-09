import React, { Component } from "react";
import { connect } from "react-redux";
import { getBook } from "../../actions/bookActions";
import { Link } from "react-router-dom";
import moment from "moment";

class BookPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBook(id);
  }
  render() {
    const { book } = this.props;
    return (
      <div className="container cn-card ">
        <div className=" bookDetails">
          <div className="bookId">Book No. {book.ID}</div>
          <div className="body">
            <h3 class="bookTitle">
              Book Title: <strong> {book.Title}</strong>
            </h3>
            <h6 class="card-subtitle bookDate">
              Publish Date: {moment(book.PublishDate).format("DD-MM-YYYY")}
            </h6>
            <p class="card-text bookInfo">
              <strong> Description:</strong> <br /> <br />
              {book.Description}
            </p>
            <p class="card-text bookInfo">Pages: {book.PageCount}</p>
          </div>
          <div class="bookPages">
            <Link to="/cart" className="btn btn-danger btn-page">
              Add to chart
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.books.book,
});

export default connect(mapStateToProps, { getBook })(BookPage);
