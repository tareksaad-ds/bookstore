import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Anavbar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-md navbar-dark mb-6"
          style={{
            background: "#343a40",
            color: "white",
          }}
        >
          <div className="container">
            <Link to="/">
              <Navbar.Brand href="#home">
                Book <strong style={{ color: "#fa944b" }}> Store</strong>
              </Navbar.Brand>
            </Link>

            <Nav>
              <Nav.Link className="navLink" href="/">
                Home
              </Nav.Link>

              <Nav.Link className="navLink">
                <Link className="cartLink" to="/cart">
                  <FaShoppingCart /> Cart ({cart})
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.books.cart,
});

export default connect(mapStateToProps, null)(Anavbar);
