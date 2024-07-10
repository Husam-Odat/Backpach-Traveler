import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
                      }}>Contact</h2>
                <ul>
  <li><Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Home</Link></li>
  <li><span><i className="fas fa-circle"></i></span><Link to="/contact" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Contact</Link></li>
</ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section id="contact_main_arae" className="section_padding">
        <div className="container">
     
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Contact with us</h2>
              </div>
            </div> 
            <br></br>
            <br></br>
      {/* Start single item */}
      <div className="col-md-4">
        <div className="single-item hvr-grow-shadow text-center">
          <div className="icon-holder">
            <span className="icon-signs2"></span>
          </div>
          <div className="text-holder">
      <h3>Come to See Us</h3>
      <br></br>
      <span className="fas fa-building" style={{ fontSize: '2rem', color: '#65B0CB' }}></span>
      <p>Building 16 - Al-Sheikh Khalil St., Irbid <br />Irbid, center of the city, HKJ </p>
    </div>


        </div>
      </div>
      {/* End single item */}
      {/* Start single item */}
      <div className="col-md-4">
        <div className="single-item hvr-grow-shadow text-center">
          <div className="icon-holder">
            <span className=""></span>
          </div>
          <div className="text-holder">
            <h3>Quick Contact</h3>
            <br></br>
            <span className="fas fa-phone" style={{ fontSize: '2rem', color: '#65B0CB' }}></span>
            <p>Ph: +962 777 745 111 <br />Email: <a href="support@backpacktraveler.com">support@backpacktraveler.com</a></p>
          </div>
        </div>
      </div>
      {/* End single item */}
      {/* Start single item */}
      <div className="col-md-4">
        <div className="single-item hvr-grow-shadow text-center">
          <div className="icon-holder">
            <span className="icon-clock"></span>
          </div>
          <div className="text-holder">
            <h3>Office Schedule</h3>
            <br></br>
            <span className="fas fa-clock" style={{ fontSize: '2rem', color: '#65B0CB' }}></span>
            <p>Saturday to Thursday : 09.00am to 17.00pm <br />Closed: Friday</p>
          </div>
        </div>
      </div>
      {/* End single item */}
    </div>
          <div className="contact_main_form_area">
            <div className="row">
              <div className="col-lg-11" style={{ marginLeft:"62px" }}>
                <div className="section_heading_center">
                  <h2>Leave us a message</h2>
                </div>
                <div className="contact_form">
                  <form action="#" id="contact_form_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control bg_input" placeholder="First name*" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control bg_input" placeholder="Last name*" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control bg_input" placeholder="Email address (Optional)" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control bg_input" placeholder="Mobile number*" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea className="form-control bg_input" rows="5" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <button type="button" className="btn btn_theme btn_md">Send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
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
                    <input type="text" className="form-control" placeholder="Enter your mail address" />
                    <button className="btn btn_theme btn_md" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
