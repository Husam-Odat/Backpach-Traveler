// import React from 'react'
import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../../layouts/master";
// import { saveCurrentUrl } from '../../common/utility';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Bookingconfirm() {
  const datesubmitted = new Date();
  const formattedDate = datesubmitted.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  // const bookingid = () => parseInt(Date.now() * Math.random()).toString();
  const bookingid = parseInt(Date.now() * Math.random()).toString();

  console.log(formattedDate);

  const { isLoggedIn, handleLogout } = useContext(MyContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressDetails: "",
    City: "",
    State: "",
    Country: "",
    date: "",
    adult: "",
    children: "",
    infant: "",
    formattedDate: "",
    bookingid: "",
    booking: [],
    bookingdetails: [],
  });

  const [selectedTour, setselectedTour] = useState([]);
  const [categoryData, setData] = useState([]);
  const [isTourAlreadyBooked, setIsTourAlreadyBooked] = useState(false);// Declare isTourAlreadyBooked with useState

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      Swal.fire({
        title: 'You must log in',
        text: 'Please log in to continue.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect the user to the login page here
          navigate("/login") // Change the URL as needed
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // If the user clicked "Cancel," go back to the previous page
          navigate(-1);
        } else if (result.dismiss === Swal.DismissReason.backdrop) {
          // If the user clicked outside the Swal border, go back to the previous page
          navigate(-1);
        }
      });

    }
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem(
          "userid"
        )}`
      );
      const data = response.data;
      console.log(data);
      if (data.booking === undefined) {
        data.booking = [];
      }
      setdata({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        addressDetails: data.addressDetails,
        City: data.City,
        State: data.state,
        Country: data.Country,
        date: data.date,
        adult: data.adult,
        children: data.children,
        infant: data.infant,
        booking: data.booking,
        formattedDate: data.formattedDate,
        bookingid: data.bookingid,
        // bookingdetails: {date, adult, children, infant}
      });
      // setdata((prevData) => ({
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     address: data.address,
      //     addressDetails: data.addressDetails,
      //     City: data.City,
      //     State: data.state,
      //     Country: data.Country,
      //     date: data.date,
      //     adult: data.adult,
      //     children: data.children,
      //     infant: data.infant,
      //     booking: data.booking, // Copy all existing properties
      //     bookingdetails: {
      //         date: prevData.data.date,
      //         adult: prevData.data.adult,
      //         children: prevData.data.children,
      //         infant: prevData.data.infant,
      //     },
      // }));

      const category = sessionStorage.getItem("category");
      const secondResponse = await axios.get(
        `https://651a6056340309952f0d2d66.mockapi.io/Category/${category}`
      );
      const selectedTour = secondResponse.data.tour.find((tour) => tour.id === id);
      setData(selectedTour);
      setselectedTour(selectedTour);
      console.log(data.name);
      // Update the isTourAlreadyBooked state based on the booking data
      const isAlreadyBooked = data.booking?.some((booking) => booking.id === id);
      setIsTourAlreadyBooked(isAlreadyBooked);

      const updatedBookingArray = [...data.booking];
      updatedBookingArray.push(selectedTour);

      // Update the data object with the modified booking array
      setdata({
        ...data,
        booking: updatedBookingArray,
      });



    } catch (error) {
      // Handle any errors that might occur during the request
      console.error("Error fetching data:", error);
    }
  }










  console.log(isTourAlreadyBooked);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!isTourAlreadyBooked) {


      try {
        await axios.put(
          `https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem("userid")}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        showAlert('Success!', 'Your info updated successfully!', 'success');
        console.log("Registration successful!");
        fetchData();
      } catch (error) {
        console.error("Error during registration:", error);

      }
    } else {
      showAlert('Sorry!', 'You have already booked this tour!', 'error');
    }
  };

  return (
    <div>
      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2>Booking Confirmation</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><span><i className="fas fa-circle"></i></span> Booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="tour_booking_submission" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tou_booking_form_Wrapper">
                <div className="tour_booking_form_box mb-4">
                  <div className="booking_success_arae">
                    <div className="booking_success_img">
                      <img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/right.png" alt="img" />
                    </div>
                    <div className="booking_success_text">
                      <h3>{data.name}, your order was submitted successfully!</h3>
                      <h6>Your booking details has been sent to: {data.email}</h6>
                    </div>
                  </div>
                </div>
                <div className="booking_tour_form">
                  <h3 className="heading_theme">Your information</h3>
                  <div className="tour_booking_form_box">
                    <div className="your_info_arae">
                      <ul>
                        <li><span className="name_first">Name:</span> <span
                          className="last_name">{data.name}</span></li>
                        {/* <li><span className="name_first">Last name:</span> <span
                          className="last_name">Doe</span></li> */}
                        <li><span className="name_first">Email address:</span> <span
                          className="last_name">{data.email}</span></li>
                        <li><span className="name_first">phone:</span> <span
                          className="last_name">{data.phone}</span></li>
                        <li><span className="name_first">Address:</span> <span className="last_name">
                          {data.address}</span></li>
                        {/* <li><span className="name_first">City:</span> <span
                          className="last_name">Thornridge</span></li> */}
                        <li><span className="name_first">State:</span> <span className="last_name">{data.State}</span>
                        </li>
                        {/* <li><span className="name_first">Postal code:</span> <span
                          className="last_name">81063</span></li> */}
                        <li><span className="name_first">Country:</span> <span className="last_name">{data.Country}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tour_details_right_sidebar_wrapper">
                <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <div className="tour_details_right_box_heading">
                      <h3>Booking details</h3>
                    </div>
                    <div className="tour_booking_amount_area">
                      <ul>
                        {/* <li>Booking ID: <span>#{data.bookingid}</span></li>
                        <li>Booking date: <span>{data.formattedDate}</span></li> */}

                        <li>Booking ID: <span>#{sessionStorage.getItem("bookingid")}</span></li>
                        <li>Booking date: <span>{sessionStorage.getItem("formattedDate")}</span></li>
                        {/* <li>Booking ID: <span>#{bookingid}</span></li>
                        <li>Booking date: <span>{formattedDate}</span></li> */}
                        {/* <li>Payment method: <span>Bank transfer</span></li> */}
                        <li>Booking status: <span>Success</span></li>
                      </ul>
                      <ul>
                        <li>Adult Price x ({data.adult}) <span>${categoryData.price * data.adult} </span></li>
                        <li>Children Price x ({data.children})<span>${categoryData.price * data.children} </span></li>
                        <li>Infant Price x ({data.infant})<span>${categoryData.price * data.infant} </span></li>
                        <li className="remove_coupon_tour">Discount <span>10%</span></li>
                        <li>Tax <span>5%</span></li>
                      </ul>
                      {/* <div className="tour_bokking_subtotal_area">
                        <h6 className="remove_coupon_tour">Subtotal <span>$38,000.00</span></h6>
                      </div> */}
                      {/* <div className="coupon_add_area">
                        <h6><span className="remove_coupon_tour">Remove</span> Coupon code (OFF 5000)
                          <span>$5,000.00</span>
                        </h6>
                      </div> */}
                      <div className="total_subtotal_booking">
                        <h6 className="remove_coupon_tour">Total Amount <span>${categoryData.price * .95 * data.adult + (data.children * categoryData.price * .5) + (data.infant * categoryData.price * .1)}</span> </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="cta_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_left">
                <div className="cta_icon">
                  <img src="http://localhost:3000/assets/img/common/email.png" alt="icon" />
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
                  <div className="input-group"><input type="text" className="form-control"
                    placeholder="Enter your mail address" /><button className="btn btn_theme btn_md"
                      type="button">Subscribe</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bookingconfirm;