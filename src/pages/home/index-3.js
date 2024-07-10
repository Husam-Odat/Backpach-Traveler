import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./category";
import Partner from "./partner";
import Testimonial from "./testimonial";
import Trending from "./trending";

const Index3 = () => {
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

      <section id="home_three_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_area_three">
                <h3 className="top_banner_three_text">Welcome to Backpack Traveler</h3>
                <h2>Experience The World Together</h2>
                {/* <h3 className="bottom_banner_three_text">
                  Find awesome flights, hotel, tour, car and packages
                </h3> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home_news_four" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Choose your destinations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Category />
          </div>
        </div>
      </section>

      <section id="partner_area" className="section_padding_top">
        <div className="container">
          <div className="partner_area_bg">
            <div className="row">
              <div className="col-lg-6">
                <div className="partner_area_left">
                  <h5>Find your best travel partner</h5>
                  <h2>
                    Prepare yourself and let’s enjoy the beauty of the world
                  </h2>
                  <p>
                    Sint est eu sit ipsum enim amet esse sunt incididunt.
                    Occaecat aliquip commodo ipsum officia in Lorem commodo
                    aliquip dolore. Nisi domip excepteur commodo ea nostrud
                    mollit.
                  </p>
                  <div className="partner_video_area">
                    <a
                      className="video_btn video_play_area"
                      href="https://www.youtube.com/watch?v=_2LLXnUdUIc"
                      title="Youtube Video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="local_counter_area">
                    <div className="local_counter_box">
                      <h2>12K</h2>
                      <h5>Local guides</h5>
                    </div>
                    <div className="local_counter_box">
                      <h2>750+</h2>
                      <h5>Destinations</h5>
                    </div>
                    <div className="local_counter_box">
                      <h2>100%</h2>
                      <h5>Happiness</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Trending tour</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Trending />
          </div>
        </div>
      </section>

      <section id="about_two_area" class="section_padding_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 col-12">
              <div class="about_two_left">
                <div class="about_two_left_top">
                  <h5>About us</h5>
                  <h2>Discover your all the destinations with us!</h2>
                  <p>
                    Sint est eu sit ipsum enim amet esse sunt incididunt.
                    Occaecat aliquip commodo ipsum officia in Lorem commodo
                    aliquip dolore. Nisi domip excepteur commodo ea nostrud
                    mollit.
                  </p>
                </div>
                <div class="about_two_left_middel">
                  <div class="about_two_item">
                    <div class="about_two_item_icon">
                      <img src="assets/img/icon/about-1.png" alt="icon" />
                    </div>
                    <div class="about_two_item_text">
                      <h3>Experienced tour guide</h3>
                      <p>
                        Dolore ullamco voluptate duis est voluptate exercitation
                        officia ad qui nostrud adipisicing non.
                      </p>
                    </div>
                  </div>
                  <div class="about_two_item">
                    <div class="about_two_item_icon">
                      <img src="assets/img/icon/about-2.png" alt="icon" />
                    </div>
                    <div class="about_two_item_text">
                      <h3>Affordable tour packages</h3>
                      <p>
                        Dolore ullamco voluptate duis est voluptate exercitation
                        officia ad qui nostrud adipisicing non.
                      </p>
                    </div>
                  </div>
                  <div class="about_two_item">
                    <div class="about_two_item_icon">
                      <img src="assets/img/icon/about-3.png" alt="icon" />
                    </div>
                    <div class="about_two_item_text">
                      <h3>Explore top places over the world</h3>
                      <p>
                        Dolore ullamco voluptate duis est voluptate exercitation
                        officia ad qui nostrud adipisicing non.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12 col-12">
              <div class="about_two_left_img">
                <img
                  src="https://andit.co/projects/html/and-tour/demo/assets/img/common/about_two.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="width_offer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/plan.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>550+ destinations</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/location.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>Best price guarantee</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/suport.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>Top quality customer support</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home_Three_client" className="section_padding">
        <div className="container">
          <div className="row">
            <Testimonial/>
          </div>
        </div>
      </section>

      <section id="our_partners" className="section_padding_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Our partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Partner/>
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

export default Index3;
