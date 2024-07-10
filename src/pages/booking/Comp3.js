import React from 'react'

function Comp3() {
  return (
      <div className="booking_tour_form_submit">
          <div className="form-check write_spical_check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1"/>
                  <label className="form-check-label" for="flexCheckDefaultf1">
                      <span className="main_spical_check">
                          <span>I read and accept all <a href="terms-service.html">Terms and
                              conditios</a></span>
                      </span>
                  </label>
          </div>
          <a type="submit" href="booking-confirmation.html" className="btn btn_theme btn_md">Submit</a>
      </div>
  )
}

export default Comp3