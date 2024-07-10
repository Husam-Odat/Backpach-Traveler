import React from 'react'

export default function testimonial() {
  return (
    <>
        <div className="col-lg-7">
              <div className="home_client_wrpper">
                <h4>Our testimonials</h4>
                <h2>What our client say about us</h2>
                <div className="home-two-quote">
                  <img src="assets/img/icon/quote.png" alt="img" />
                  <h3>Awesome service</h3>
                </div>
                <div className="home_two_client_slider  owl-theme owl-carousel">
                  <div className="client_two_content">
                    <p>
                      Ad non quis quis commodo ut nostrud ipsum ad
                      reprehenderit. Lorem eiusmod excepteur anim adipisicing
                      officia officia. Ad non quis quis commodo ut nostrud ipsum
                      ad reprehenderit. Lorem eiusmod excepteur
                    </p>
                    <div className="client_two_author">
                      <h5>Cameron douglas</h5>
                      <h6>Businessman</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_three_client_right">
                <img
                  src="assets/img/test.png"
                  alt="img"
                />
              </div>
            </div>
    </>
  )
}
