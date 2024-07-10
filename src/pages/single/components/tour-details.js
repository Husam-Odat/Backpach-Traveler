
function TourDetails({name,location,rating,n_reviews,duration,tour_type,group_size}) {

  
  return (
    <div>
          <div >
            {/* Tour Details */}
            <div className="tour_details_heading_wrapper">
              <div className="tour_details_top_heading">
                <h2>{name}</h2>
                 <h5>
                  <i className="fas fa-map-marker-alt"></i> {location}
                </h5>
              </div>
              <div className="tour_details_top_heading_right">
                <h4>Excellent</h4> <h6>{rating}/5</h6>
                <p>({n_reviews} reviews)</p> 
              </div>
            </div>

            <div className="tour_details_top_bottom">
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Duration</h5>
                  <p>{duration}</p>
                </div>
              </div>

              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-paw"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Tour type</h5>
                  <p>{tour_type}</p>
                </div>
              </div>
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Group size</h5>
                  <p>{group_size}</p>
                </div>
              </div>
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Location</h5>
                  <p>{location}</p>
                </div>
              </div>
            </div>
            {/* End Of Tour Details */}
          </div>
        {/* ))
      ))} */}
    </div>
  );
}

export default TourDetails;
