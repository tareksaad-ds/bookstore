import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Anavbar from "./components/layout/Anavbar";
import Home from "./components/landing/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import BookPage from "./components/book-page/BookPage";
import YourCart from "./components/your-cart/YourCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <div>
          <Anavbar />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={YourCart} />
        <Route exact path="/book/:id" component={BookPage} />

        <div className="container"></div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
