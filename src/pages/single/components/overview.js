import React from 'react';

function Overview({ overview }) {
  // console.log(tour_details);
  console.log(overview.tour_details);

  if(!overview.tour_details){
    return <div>Please Wait!</div>
  }
  return (
    
    <div className="tour_details_boxed">
      
      <h3 className="heading_theme">Overview</h3>
      <div className="tour_details_boxed_inner">
        <p>{overview.overview}</p>
        <ul>
          {overview.tour_details.map((detail) => (
            <li >
              <i className="fas fa-circle"></i> {detail.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default Overview;
