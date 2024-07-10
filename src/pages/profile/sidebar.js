import React, { useContext } from "react";
import { MyContext } from "../../layouts/master"; 
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

const Sidebar = ({registerData}) => {
  console.log(registerData);
    const { isLoggedIn, handleLogout } = useContext(MyContext);
    const navigate = useNavigate();
   
  return (
    <>
      <div className="col-lg-4">
        <div className="dashboard_sidebar">
          <div className="dashboard_sidebar_user">
            <img src="https://static.thenounproject.com/png/5034901-200.png" alt="img" />
            <h3>{registerData.name}</h3>
            <p>
              <a href="tel:+00-123-456-789">{registerData.phone}</a>
            </p>
            <p>
              <a href="mailto:sherlyn@domain.com">{registerData.email}</a>
            </p>
          </div>
          <div className="dashboard_menu_area">
            <ul>
            <li>
                <Nav.Link
                  as={NavLink}
                  to="/myprofile"
                ><i class="fas fa-user-circle"></i>
                  Profile info
                </Nav.Link>
              </li>
              <li>
                      <Nav.Link
                        as={NavLink}
                        to="/myprofile/booking"
                      >
                       <i className="fas fa-hotel"></i> Completed tours
                      </Nav.Link>
                    </li>
              
             
             
              <li>
               
                <Nav.Link
                 
                  
                 onClick={handleLogout}
                  
                
                ><i className="fas fa-sign-out-alt"></i>
                  Logout
                </Nav.Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
