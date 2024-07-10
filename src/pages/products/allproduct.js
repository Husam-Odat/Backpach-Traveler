import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = ({ onSearch }) => {
  const [categoryData, setData] = useState([]);
  const { id } = useParams();
  const toursPerPage = 6; // Number of tours to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  sessionStorage.setItem("category", id);

  useEffect(() => {
    axios
      .get("https://651a6056340309952f0d2d66.mockapi.io/Category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const selectedCategory = categoryData.find((category) => category.id === id);
  const tours = selectedCategory?.tour ?? [];
  console.log(categoryData.description);

  // Calculate the total number of pages needed based on the number of tours
  const totalPages = Math.ceil(tours.length / toursPerPage);

  // Calculate the index range of tours to display on the current page
  const startIndex = (currentPage - 1) * toursPerPage;
  const endIndex = startIndex + toursPerPage;

  // Get the tours to display on the current page
  const toursToDisplay = tours.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const activePageStyle = {
    backgroundColor: "rgb(101,176,203)", // Change this to your desired color
    color: "white", // Change this to your desired text color
  };

  return (
    <>
      <div className="search-overlay">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-close">
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>
            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="button">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2>Tour search result</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>{" "}
                    Tours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="theme_search_form_tour">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="theme_search_form_area">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tours"
                    role="tabpanel"
                    aria-labelledby="tours-tab"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tour_search_form">
                          <form action="#!">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="flight_Search_boxed">
                                  <p>Destination</p>
                                  <input
                                    type="text"
                                    placeholder="Search..."
                                  />
                                  <span>Where are you going?</span>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="form_search_date">
                                  <div className="flight_Search_boxed date_flex_area">
                                    <div className="Journey_date">
                                      <p>Journey date</p>
                                      <input type="date" value="2022-05-03" />
                                      <span>Thursday</span>
                                    </div>
                                    <div className="Journey_date">
                                      <p>Return date</p>
                                      <input type="date" value="2022-05-05" />
                                      <span>Thursday</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                <div className="flight_Search_boxed dropdown_passenger_area">
                                  <p>Passenger, className </p>
                                  <div className="dropdown">
                                    <button
                                      className="dropdown-toggle final-count"
                                      data-toggle="dropdown"
                                      type="button"
                                      id="dropdownMenuButton1"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      0 Passenger
                                    </button>
                                    <div
                                      className="dropdown-menu dropdown_passenger_info"
                                      aria-labelledby="dropdownMenuButton1"
                                    >
                                      <div className="traveller-calulate-persons">
                                        <div className="passengers">
                                          <h6>Passengers</h6>
                                          <div className="passengers-types">
                                            <div className="passengers-type">
                                              <div className="text">
                                                <span className="count pcount">
                                                  2
                                                </span>
                                                <div className="type-label">
                                                  <p>Adult</p>
                                                  <span>12+ yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button
                                                  type="button"
                                                  className="btn-add"
                                                >
                                                  <i className="fas fa-plus"></i>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn-subtract"
                                                >
                                                  <i className="fas fa-minus"></i>
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text">
                                                <span className="count ccount">
                                                  0
                                                </span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Children
                                                  </p>
                                                  <span>
                                                    2 - Less than 12 yrs
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button
                                                  type="button"
                                                  className="btn-add-c"
                                                >
                                                  <i className="fas fa-plus"></i>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn-subtract-c"
                                                >
                                                  <i className="fas fa-minus"></i>
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text">
                                                <span className="count incount">
                                                  0
                                                </span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Infant
                                                  </p>
                                                  <span>Less than 2 yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button
                                                  type="button"
                                                  className="btn-add-in"
                                                >
                                                  <i className="fas fa-plus"></i>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn-subtract-in"
                                                >
                                                  <i className="fas fa-minus"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cabin-selection">
                                          <h6>Cabin className</h6>
                                          <div className="cabin-list">
                                            <button
                                              type="button"
                                              className="label-select-btn"
                                            >
                                              <span className="muiButton-label">
                                                Economy
                                              </span>
                                            </button>
                                            <button
                                              type="button"
                                              className="label-select-btn active"
                                            >
                                              <span className="muiButton-label">
                                                Business
                                              </span>
                                            </button>
                                            <button
                                              type="button"
                                              className="label-select-btn"
                                            >
                                              <span className="MuiButton-label">
                                                First className{" "}
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>Business</span>
                                </div>
                              </div>
                              <div className="top_form_search_button">
                                <button className="btn btn_theme btn_md">
                                  Search
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore_area" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>{tours.length} tours found</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="left_side_search_area">
                <div className="left_side_search_boxed">
                  <div className="left_side_search_heading">
                    <h5>Description</h5>
                  </div>
                  <div className="name_search_form">
                    <p>{selectedCategory?.description}</p>
                    {/* <input type="text" className="form-control" placeholder="e.g Deluxe bus"/>
                                <i className="fas fa-search"></i> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {toursToDisplay.map((tour, index) => (
                  <div
                    className={`col-lg-4 col-md-6 col-sm-6 col-12 ${
                      currentPage === 1 && index === 0 ? "first-card" : ""
                    }`}
                    key={tour.id}
                  >
                    <div className="theme_common_box_two img_hover">
                      <div className="theme_two_box_img">
                        <Link
                          as={Link}
                          exact
                          to={`/single/${tour.id}`} // Include the tour id as a URL parameter
                        >
                          <img src={tour.image1} alt="img" />
                        </Link>
                        <p>
                          <i className="fas fa-map-marker-alt"></i>
                          {tour.location}
                        </p>
                      </div>
                      <div className="theme_two_box_content">
                        <h4>
                          <Link as={Link} exact to={`/single/${tour.id}`}>
                            {tour.name}
                          </Link>
                        </h4>
                        <p>
                          <span className="review_rating">
                            {tour.rating} Excellent
                          </span>{" "}
                          <span className="review_count">
                            ({tour.n_reviews} reviews)
                          </span>
                        </p>
                        <h3>
                          <span>Price starts from</span> ${tour.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-12">
                <div className="pagination_area">
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          index + 1 === currentPage ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => handlePageChange(index + 1)}
                          style={
                            index + 1 === currentPage ? activePageStyle : {}
                          }
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
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
                  <img
                    src="http://localhost:3000/assets/img/common/email.png"
                    alt="icon"
                  />
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

export default Products;
