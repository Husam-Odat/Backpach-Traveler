import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Common Banner Area */}
      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2  style={{
                        
                        fontSize: "40px",
                      }}>About us</h2>
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
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about_us_top" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_us_left">
                <h5>About us</h5>
                <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                <p>
                  We are a leading travel agency with a track record of
                  excellence since the year 2000. Our mission is to provide you
                  with unforgettable travel experiences that leave you with
                  cherished memories.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to crafting
                  the perfect itinerary for your dream vacation. Whether you're
                  seeking adventure, relaxation, or cultural exploration, we
                  have the expertise to make it happen.
                </p>
                <Link
                as={Link}
                exact
                to={`/product/1`}>
              <a href="tour-search.html" className="btn btn_theme btn_md">
                  Find tours
                </a>
              </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_us_right">
                <img
                  src="https://andit.co/projects/html/and-tour/demo/assets/img/common/abour_right.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section id="about_offer_banner" className="section_padding_bottom">
        <div className="container-fluid">
          <div className="row">
            <h2 className="d-none">Heading</h2>
            <div className="col-lg-4">
              <div className="about_offer_banner">
                <a href="!#">
                  <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/common/small_banner.png"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about_offer_banner">
                <img
                  src="https://andit.co/projects/html/and-tour/demo/assets/img/common/big_banner.png"
                  alt="img"
                />
                <div className="about_offer_text">
                  <h2>Sea Adventure Tour in Bali</h2>
                  <Link
                    as={Link}
                    exact
                    to={`/single/5`}  
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "22px",
                      }}
                  >
                    Find tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Service Area */}
      <section id="about_service_offer" className="section_padding_bottom">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="about_service_boxed">
          <img src="assets/img/icon/world.png" alt="Best Services Icon" style={{ color: '#65B0CB' }} />
          <h5>
            <a href="#!">Best services</a>
          </h5>
          <p>
            We offer the best services to make your travel experience exceptional. Our dedicated team ensures your journey is comfortable and memorable. Trust us for a delightful travel adventure.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="about_service_boxed">
          <img src="assets/img/icon/walte.png" alt="Trusted Payment Icon" style={{ color: '#65B0CB' }} />
          <h5>
            <a href="#!">Trusted payment</a>
          </h5>
          <p>
            We provide secure and trusted payment options for your convenience. Your financial transactions with us are protected, ensuring a hassle-free booking experience.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="about_service_boxed">
          <img src="assets/img/icon/star.png" alt="Top Facility Icon" style={{ color: '#65B0CB' }} />
          <h5>
            <a href="#!">Top facility</a>
          </h5>
          <p>
            Enjoy top-notch facilities during your travels. We partner with the best accommodations and transport services to provide you with a comfortable and luxurious experience wherever you go.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="about_service_boxed">
          <img src="assets/img/icon/persentis.png" alt="Awesome Deals Icon" style={{ color: '#65B0CB' }} />
          <h5>
            <a href="#!">Awesome deals</a>
          </h5>
          <p>
            Discover amazing deals and discounts on our travel packages. We offer budget-friendly options without compromising on the quality of your travel experience. Save more and explore more!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* consultation Area */}
      <section id="consultation_area" className="section_padding_bottom">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="consultation_area_text">
          <h2>Have you any question? Get A Consultation</h2>
          <p>
            If you have any questions or need professional advice, don't hesitate to reach out to us. Our experts are here to assist you with your queries and provide guidance for your needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Counter Area */}
      <section id="counter_area" className="section_padding_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="counter_area_wrapper">
                <div className="row">
                  <div className="col-lg-3 col-md-6 clo-sm-12 col-12">
                    <div className="counter_item">
                      <img src="assets/img/icon/user.png" alt="icon" />
                      <h3 className="counter">30</h3>
                      <h6>Partners</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 clo-sm-12 col-12">
                    <div className="counter_item">
                      <img src="assets/img/icon/bank.png" alt="icon" />
                      <h3 className="counter">120</h3>
                      <h6>Listed property</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 clo-sm-12 col-12">
                    <div className="counter_item">
                      <img src="assets/img/icon/world-map.png" alt="icon" />
                      <h3 className="counter">55</h3>
                      <h6>Destinations</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 clo-sm-12 col-12">
                    <div className="counter_item">
                      <img src="assets/img/icon/calander.png" alt="icon" />
                      <h3 className="counter">3620</h3>
                      <h6>Booking</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta Area */}
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

export default About;
