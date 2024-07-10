import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useParams } from "react-router-dom";



function OntheSide({ valid_from, valid_till, price, overview,id }) {
  console.log(id);
  if (!overview || !overview.tour_details) {
    return <div>Please Wait!</div>;
  }

  return (
    <div className="col-lg-4" style={{ marginTop: '38px' }}>
      <div className="tour_details_right_sidebar_wrapper">
        <div className="tour_detail_right_sidebar">
          <div className="tour_details_right_boxed">
            <div className="tour_details_right_box_heading">
              <h3>Standard package</h3>
            </div>
            <div className="valid_date_area">
              <div className="valid_date_area_one">
                <h5>Valid from</h5>
                <p>{valid_from}</p>
              </div>
              <div className="valid_date_area_one">
                <h5>Valid till</h5>
                <p>{valid_till}</p>
              </div>
            </div>
            <br />
            <div className="tour_package_details_bar_list">
              <h5>Package details</h5>
              <ul style={{ fontSize: '18px' }}>
                {overview.tour_details.map((detail, index) => (
                  <li key={index}>
                    <i className="fas fa-circle"></i> {detail.note}
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <div className="tour_package_details_bar_price">
              <h5>Price</h5>
              <div className="tour_package_bar_price">
                <h3>
                  $ {price} <sub>/Per person</sub>
                </h3>
              </div>
            </div>
          </div>
          <div className="tour_select_offer_bar_bottom">
            {/* Use Link instead of button, and set the 'to' prop for the route */}
            {/* ====husam============== */}
            
{/* ========husam======= */}
            
            <Link
              // to="/booking"
              to={`/booking/${id}`}
              className="btn btn_theme btn_md w-100"
            >
              Book Now
            </Link>
          </div>
        </div>
        
       
        <div className="tour_detail_right_sidebar">
        <div className="tour_detail_right_sidebar">
  <div className="tour_details_right_boxed">
    <div className="tour_details_right_box_heading">
      <h3>Why choose us</h3>
    </div>
    <br />
    <div className="tour_package_details_bar_list first_child_padding_none">
      <ul style={{ fontSize: '18px' }}> {/* Adjust the font size as needed */}
        <li>
          <i className="fas fa-circle"></i> Buffet breakfast as per the Itinerary
        </li>
        <li>
          <i className="fas fa-circle"></i> All toll tax, parking, fuel, and driver allowances
        </li>
        <li>
          <i className="fas fa-circle"></i> Comfortable and hygienic vehicle
        </li>
        <li>
          <i className="fas fa-circle"></i> Your safety is our priority. We take all necessary precautions and have support systems in place.
        </li>
        <li>
          <i className="fas fa-circle"></i> Our customer support team is available 24/7 to assist you with any inquiries
        </li>
        <li>
          <i className="fas fa-circle"></i> Experienced tour guides to make your trip informative and enjoyable
        </li>
        <li>
          <i className="fas fa-circle"></i> Customized itineraries to suit your preferences and interests
        </li>
      </ul>
      <br></br>
    </div>
  </div>
</div>

</div>

      </div>
    </div>
  );
}

export default OntheSide;
