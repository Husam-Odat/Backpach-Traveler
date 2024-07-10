import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://651a6344340309952f0d333a.mockapi.io/hasan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      console.log("Registration successful!");
      navigate("/login");
      
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
<div>

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
                        <h2>Register</h2>
                        <ul>
                            <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></li>
                            <li><span><i class="fas fa-circle"></i></span> Register</li>
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
              <h3>Register account</h3>
              <h2>Register your account</h2>
            </div>
            <div className="common_author_form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name*"
                    name="name"
                    value={registerData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address*"
                    name="email"
                    value={registerData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password*"
                    name="password"
                    value={registerData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="common_form_submit">
                  <button className="btn btn_theme btn_md" type="submit">Register</button>
                </div>
                <div className="have_acount_area other_author_option">
                  <p>Already have an account? <Link to="/login">
                  Login now
                </Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
};

export default Register;
