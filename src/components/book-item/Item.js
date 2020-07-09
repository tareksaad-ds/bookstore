import React, { Component } from "react";
import { Link } from "react-router-dom";
import { changeCart } from "../../actions/bookActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class BookItem extends Component {
  render() {
    const { book } = this.props;
    const onClick = (book) => {
      const { ID, Title } = book;
      const bookToCart = { ID, Title };

      const currentCart = localStorage.getItem("CART");

      let cartList = [];

      if (currentCart) {
        cartList = JSON.parse(currentCart);
        const isExist = cartList.filter((item) => item.ID === ID);
        if (isExist.length > 0) {
          toast.warn("Book already added to cart");
          return;
        }
      }

      cartList.push(bookToCart);
      localStorage.setItem("CART", JSON.stringify(cartList));
      this.props.changeCart();
    };

    return (
      <div
        className="card col-md-3"
        style={{ margin: "10px 10px", padding: "5px 5px" }}
      >
        <h6 className="card-header" style={{}}>
          #{book.ID}
        </h6>
        <div className="card-body">
          <h4 className="card-title" style={{}}>
            <Link to={`/book/${book.ID}`}> {book.Title}</Link>
          </h4>
          <p className="card-text" style={{}}>
            Pages: {book.PageCount}
          </p>
          <Link
            href="/#"
            className="btn btn-danger"
            onClick={(e) => onClick(book)}
          >
            Add to chart
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { changeCart })(BookItem);
