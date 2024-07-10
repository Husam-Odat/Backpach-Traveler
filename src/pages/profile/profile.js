
import React, { useState,useEffect, } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { fetchData } from "./api";
function MyProfile() {

    const [registerData, setRegisterData] = useState({ name: "", email: "", phone: "" });
    

useEffect(() => {
  fetchUserData()
}, []);

const showAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'your info updated successfuly!',
      icon: 'success',
    })};

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
    }


    // const axios = require('axios');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.put(`https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem("userid")}`, registerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showAlert()
    console.log("Registration successful!");
    fetchUserData()
    
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setRegisterData({ ...registerData, [name]: value });
    };

 

  return (
    <>
   
    

   
                <div className="col-lg-8">
                    <div className="dashboard_common_table">
                        <h3>My Profile</h3>
                        <div className="profile_update_form">
                            <form onSubmit={handleSubmit} id="profile_form_area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="f-name">Name</label>
                                            <input type="text" name="name" className="form-control" id="f-name" placeholder="Your Name"
                                               value={registerData.name}
                                               onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="mail-address">Email address</label>
                                            <input type="text" name="email" className="form-control" id="mail-address"
                                                value={registerData.email}
                                                onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="mobil-number">Mobile number</label>
                                            <input type="text" name="phone" className="form-control" id="mobil-number"
                                               value={registerData.phone}
                                               onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            {/* <label for="u-name">User name</label> */}
                                            <input type="submit" className="btn btn_theme btn_md" id="u-name" value="Change"/>
                                        </div>
                                    </div>
                                 
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        
  
    </>
  );
}

export default MyProfile;
   
   

   
    

    
    

    
    

