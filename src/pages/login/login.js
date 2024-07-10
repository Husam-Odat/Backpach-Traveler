import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MyContext } from "../../layouts/master"; 



const Login = () => {
  const {handleLogin,is} = useContext(MyContext); // Use useContext to access the context
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://651a6344340309952f0d333a.mockapi.io/hasan");
      const data = await response.json();

      const user = data.find((user) => user.email === loginData.email && user.password === loginData.password);

      if (user) {
        setMessage("Login successful!");
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userid", user.id);
        console.log(user.id);
        handleLogin();
      } else {
        setMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Error during login. Please try again later.");
    }
  };
  return (
    <>
    <div class="search-overlay">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-close">
                    <span class="search-overlay-close-line"></span>
                    <span class="search-overlay-close-line"></span>
                </div>
                <div class="search-overlay-form">
                    <form>
                        <input type="text" class="input-search" placeholder="Search here..."/>
                        <button type="button"><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
    <section id="common_banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_bannner_text">
                        <h2>Login</h2>
                        <ul>
                            <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></li>
                            <li><span><i class="fas fa-circle"></i></span> Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
      <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="common_author_boxed">
                <div className="common_author_heading">
                  <h3>Login your account</h3>
                  <h2>Logged in to stay in touch</h2>
                </div>
                <div className="common_author_form">
                <form onSubmit={handleSubmit} id="main_author_form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required />
                    </div>
                    <div className="common_form_submit">
                      <button className="btn btn_theme btn_md" type="submit">
                        Log in
                      </button>
                    </div>
                    {message && <p style={{ color: 'red' }}>{message}</p>}
                    <div className="have_acount_area">
                      <p>
                        Dont have an account? <a href="register">Register now</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
