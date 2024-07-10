import React,{useState,useEffect} from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "./profile";
import Sidebar from "./sidebar";
import Booking from "./sidebar";
import axios from "axios";
import { fetchData } from "./api"; 

const Mainprofile = () => {
  const [registerData, setRegisterData] = useState({ name: "", email: "", phone: "" });
useEffect(() => {
  fetchUserData()
},[])

async function fetchUserData() {
  try {
    const data = await fetchData(sessionStorage.getItem("userid"));
    setRegisterData({
      name: data.name,
      email: data.email,
      phone: data.phone
    });
  } catch (error) {
    // Handle error
  }


// ... rest of your component code ...
}
  console.log(registerData);
  return (
    <>
      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2>My Profile</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>
                    <a href="dashboard.html">Customer dashboard</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>
                    My Profile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard_main_arae" className="section_padding">
        <div className="container">
          <div className="row">
            <Sidebar registerData={registerData} />
            <Routes>
              {/* <Route index path="/myprofile" element={<Profile registerData={registerData} fetch= {fetch} />}></Route> */}
              <Route path="/myprofile/booking" element={<Booking />}></Route>
            </Routes>
            <Outlet/>
          </div>
        </div>
      </section>

      <section id="cta_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_left">
                <div className="cta_icon">
                  <img src="assets/img/common/email.png" alt="icon" />
                </div>
                <div className="cta_content">
                  <h4>Get the latest news and offers</h4>
                  <h2>Subscribe to our newsletter</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cat_form">
                <form id="cta_form_wrappper">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your mail address"
                    />
                    <button className="btn btn_theme btn_md" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainprofile;
