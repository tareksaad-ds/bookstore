import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="mainfooter" role="contentinfo">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-pad">
                    <h4> Adresses </h4>
                    <hr />
                    <br />
                    <ul className="list-unstyled">
                      <li>50 Fouad St branch Sultan Hussin</li>
                      <li>40 Laamaay St branch MalekHefny</li>
                      <li>20 Cairo St branch MalekHefny</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-pad">
                    <h4>Sections</h4>
                    <hr />
                    <br />
                    <ul className="list-unstyled">
                      <li>Last Release</li>
                      <li>Top Popular</li>
                      <li>Top Sales</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <h4>Follow Us</h4>
                  <hr />
                  <br />

                  <ul className="social-network social-circle">
                    <li>
                      <Link href="#" className="faces" title="Facebook">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="insta" title="Instagram">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter" title="Twitter">
                        <FaTwitterSquare />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 copy">
                  <p className="text-center">
                    &copy; Copyright 2018 - Company Name. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
