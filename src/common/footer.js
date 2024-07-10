import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {

  return (
    <>
      <footer id="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Need any help?</h5>
              </div>
              <div className="footer_first_area">
                <div className="footer_inquery_area">
                  <h5>Call 24/7 for any help</h5>
                  <h3>
                    {" "}
                    <a href="tel:+00-123-456-789">+962 777 745 111</a>
                  </h3>
                </div>
                <div className="footer_inquery_area">
                  <h5>Mail to our support team</h5>
                  <h3>
                    {" "}
                    <a href="mailto:support@domain.com">
                      support@backpacktraveler.com
                    </a>
                  </h3>
                </div>
               
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Company</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                <li>
                    <NavLink as={NavLink} exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      as={NavLink}
                      exact
                      to="/about"
                      activeClassName="active"
                    >
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/myprofile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink as={NavLink} exact to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Top destinations</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                  <li>
                    <NavLink
                      as={NavLink}
                      exact
                      to="/product/1"
                      activeClassName="active"
                    >
                      HoneyMoon Tours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      as={NavLink}
                      exact
                      to="/product/2"
                      activeClassName="active"
                    >
                      Family Tours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      as={NavLink}
                      exact
                      to="/product/3"
                      activeClassName="active"
                    >
                      Solo Tours
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer_heading_area">
              <h5>Follow us on</h5>
                  <ul className="soical_icon_footer">
                    <li>
                      <a href="#!">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
              </div>
              
            </div>

            
          </div>
        </div>
      </footer>
      <div className="copyright_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_left">
                <p>Copyright © 2022 Backpack Traveler All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="go-top">
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
      </div>
    </>
  );
}
