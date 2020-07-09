import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { changeCart } from "../../actions/bookActions";
import { connect } from "react-redux";

class YourCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: JSON.parse(localStorage.getItem("CART")),
    };
  }
  render() {
    const { cart } = this.state;
    const onClick = (book) => {
      const currentCart = JSON.parse(localStorage.getItem("CART"));
      const newCart = currentCart.filter((item) => item.ID !== book.ID);
      localStorage.setItem("CART", JSON.stringify(newCart));
      this.setState({ cart: newCart });
      this.props.changeCart();
    };

    const clearCart = (e) => {
      // localStorage.setItem("CART", JSON.stringify([]));
      localStorage.removeItem("CART");
      this.setState({ cart: null });
      this.props.changeCart();
    };
    return (
      <div className="container">
        <button className="btn btn-secondary" onClick={clearCart}>
          Clear
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(cart &&
              cart.map((item) => (
                <tr key={item.ID}>
                  <td>#{item.ID}</td>
                  <td>{item.Title}</td>
                  <td>5$</td>
                  <td>
                    <Link href="#" onClick={(e) => onClick(item)}>
                      <FaTimes />
                    </Link>
                  </td>
                </tr>
              ))) || (
              <tr>
                <td colSpan={4} className="text-center">
                  No books in the cart
                </td>
              </tr>
            )}
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td></td>
              <td>
                <strong>{(cart && cart.length * 5) || 0}$</strong>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(null, { changeCart })(YourCart);
