import React, { useRef, useEffect, useState } from "react";
import TourDetails from "./components/tour-details";
import ImageSlider from "./components/image-slidder";
import Overview from "./components/overview";
import Itinerary from "./components/itinerary";
// import IncludedExcluded from "./components/included-excluded";
import CustomerReviews from "./components/reviews";
import OntheSide from "./components/on-the-side";
import Map from "./components/map";
import axios from "axios";

// import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
// import HelmetComponent from "./components/helmet"
import { Link } from "react-router-dom";



function Single() {
  const { id } = useParams();
  const [categoryData, setData] = useState([]);
  useEffect(() => {
    // Replace "your_session_variable_name" with the actual session variable name
    // const tourId = sessionStorage.getItem("your_session_variable_name");

    if (id) {
      // setTourIdFromSession(tourId);
      const category = sessionStorage.getItem("category");
      axios
        .get(`https://651a6056340309952f0d2d66.mockapi.io/Category/${category}`)
        .then((response) => {
          const selectedTour = response.data.tour.find(
            (tour) => tour.id === id
          );
          setData(selectedTour);
          console.log(selectedTour.name); // Wrap the response in an array for mapping
          // =husam==============================================================
          // const selectedTourss = sessionStorage.setItem("selectedTourss", selectedTour.name);
         
          // console.log(selectedTourss);
          // ==husam==================================================================
          console.log(selectedTour.name) ;// Wrap the response in an array for mapping
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  if (!categoryData) {
    return <div></div>;
  }

  return (
    <>
      {/* Common Banner Area */}
      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2 style={{
                        
                        fontSize: "40px",
                      }}>Explore the {categoryData.name}</h2>
                <ul>
                <li>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to={`/product/1`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Tours
                    </Link>
                  </li>
                  <li   style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                      }}>
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>{" "}
                    Tours Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Search Areas */}
      <section id="tour_details_main" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-11" style={{ marginLeft: "40px" }}>
              {/* Tour Details component */}
              <TourDetails
                name={categoryData.name}
                location={categoryData.location}
                n_reviews={categoryData.n_reviews}
                rating={categoryData.rating}
                duration={categoryData.duration}
                tour_type={categoryData.tour_type}
                group_size={categoryData.group_size}
              />
            </div>

            <div className="col-lg-8">
              <div className="tour_details_leftside_wrapper">
                {/* Use the ImageSlider component */}
                <ImageSlider
                  image1={categoryData.image1}
                  image2={categoryData.image2}
                  image3={categoryData.image3}
                  image4={categoryData.image4}
                />
                <br></br>
                {/* Overview component */}
                <Overview overview={categoryData} />
                
                {/* Itinerary component */}
                <Itinerary itinerary={categoryData} />
              </div>
            </div>

            {/* On the Side Component */}
            <OntheSide
              valid_from={categoryData.valid_from}
              valid_till={categoryData.valid_till}
              price={categoryData.price}
              overview={categoryData}
              id = {categoryData.id}
            />
          </div>
        </div>
        <div className="col-lg-11" style={{ marginLeft: "55px" }}>
          {/* Map component */}
          <Map map={categoryData.map} />
        </div>
        <div className="col-lg-11" style={{ marginLeft: "55px" }}>
          {/* Reviews  Component */}
          <CustomerReviews  id = {categoryData.id} />
        </div>
      </section>

      {/* Cta Area */}

      <section id="cta_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_left">
              <div className="cta_icon">
              <img src="http://localhost:3000/assets/img/common/email.png" alt="icon"/>
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

      {/* <HelmetComponent/> */}
    </>
  );
}

export default Single;
