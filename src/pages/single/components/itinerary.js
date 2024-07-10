
import React from 'react';

function Itinerary({ itinerary }) {
  if (!itinerary || !itinerary.itinerary) {
    return <div></div>;
  }

  return (
    <div className="tour_details_boxed">
      <h3 className="heading_theme">Itinerary</h3>
      {itinerary.itinerary.map((day) => (
        <div className="tour_details_boxed_inner" key={day.day}>
          <div className="accordion" id="accordionExample">
            <div className="accordion_flex_area">
              <div className="accordion_left_side">
                <h5>Day {day.day}</h5>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${day.day}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${day.day}`}
                    aria-expanded="true"
                    aria-controls={`collapse${day.day}`}
                  >
                    Activities
                  </button>
                </h2>
                <div
                  id={`collapse${day.day}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`heading${day.day}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="accordion_itinerary_list">
                      <ul>
                        {day.activities.map((activity, index) => (
                          <li key={index}>
                            <i className="fas fa-circle"></i> {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
