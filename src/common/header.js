import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
export default function Header({ isLoggedIn, handleLogout }) {

  const [userName, setUserName] = useState('');
  // const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';



  useEffect(() => {
    const loggedInUserEmail = sessionStorage.getItem('userEmail'); // Assuming user's email is stored in sessionStorage
    if (loggedInUserEmail) {
      const apiUrl = `https://651a6344340309952f0d333a.mockapi.io/hasan?email=${loggedInUserEmail}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Assuming the API response is an array containing a single user object

          if (data.length > 0) {
            const user = data[0];
            setUserName(user.name);
          } else {
            console.error('User not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);
  return (
    <>
      <header className="main_header_arae">
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">

                  <Nav.Link
                    as={NavLink}
                    exact
                    to="/"
                    activeClassName="active"
                  >
                    <img
                      src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/LIGHT.png"
                      alt="logo"
                      width="240"
                      height="60"
                      style={{ marginTop: "5px" }}
                    />
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Nav.Link
                  as={NavLink}
                  exact
                  to="/"
                  activeClassName="active"
                >
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/LIGHT.png"
                    alt="logo"
                    width="240"
                    height="60"
                    style={{ marginTop: "5px" }}
                  />
                </Nav.Link>
                <div
                  // className="collapse navbar-collapse col-10 pl-2 mr-5"
                  className="collapse navbar-collapse mean-menu col-10"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/"
                        activeClassName="active"
                      >
                        Home
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link" >
                        Destinations
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Nav.Link
                            as={NavLink}
                            exact
                            to="/product/1"
                            activeClassName="active"
                          >
                            HoneyMoon Tours
                          </Nav.Link>

                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            as={NavLink}
                            exact
                            to="/product/2"
                            activeClassName="active"
                          >
                            Family Tours
                          </Nav.Link>

                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            as={NavLink}
                            exact
                            to="/product/3"
                            activeClassName="active"
                          >
                            Solo Tours
                          </Nav.Link>

                        </li>
                        {/* Rest of the categories */}
                      </ul>
                    </li>
                    <li className="nav-item">
                      {/* <Nav.Link as={NavLink} exact to="/about">About us
                      </Nav.Link> */}
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/about"
                        activeClassName="active"
                      >
                        About us
                      </Nav.Link>
                    </li>

                    <li className="nav-item">
                      <Nav.Link as={NavLink} exact to="/contact">
                        Contact us
                      </Nav.Link>
                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center ">
                    {isLoggedIn ? (
                      <>
                        <div className="option-item">
                          {/* <span style={{ color: 'white', fontSize: '20px' }}>{userName.split(" ")[0]}</span> */}
                          <NavLink to="/myprofile" className="btn btn_navber">
                            {userName.split(" ")[0]}
                          </NavLink>
                        </div>

                        <div className="option-item">
                          <button className="btn btn_navber" onClick={handleLogout}>
                            Log Out
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="option-item">
                          <NavLink to="/login" className="btn btn_navber">
                            Login
                          </NavLink>
                        </div>
                        <div className="option-item">
                          <NavLink to="/register" className="btn btn_navber">
                            Sign Up
                          </NavLink>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">
                        Get a free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
