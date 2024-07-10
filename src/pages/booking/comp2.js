import React from 'react'

function Comp2() {
  return (
      <div className="booking_tour_form">
          <h3 className="heading_theme">Payment method</h3>
          <div className="tour_booking_form_box">
              <div className="booking_payment_boxed">
                  <form onSubmit={handleSubmit} 
                      
                      action="!#" id="payment_checked">
                      <div className="form-check">
                          <input value={bookData.card}
                              onChange={handleInputChange} className="form-check-input" type="radio" name="flexRadioDefault"
                              id="flexRadioDefault1" />
                              <label className="form-check-label" for="flexRadioDefault1">
                                  Payment by card
                              </label>
                      </div>
                      <div className="form-check">
                          <input value={bookData.paypal}
                              onChange={handleInputChange}  className="form-check-input" type="radio" name="flexRadioDefault"
                              id="flexRadioDefault2" />
                              <label className="form-check-label" for="flexRadioDefault2">
                                  Paypal
                              </label>
                      </div>
                      <div className="form-check">
                          <input value={bookData.payoneer}
                              onChange={handleInputChange} className="form-check-input" type="radio" name="flexRadioDefault"
                              id="flexRadioDefault3" />
                              <label className="form-check-label" for="flexRadioDefault3">
                                  Payoneer
                              </label>
                      </div>
                      <div className="form-check">
                          <input value={bookData.cash}
                              onChange={handleInputChange} className="form-check-input" type="radio" name="flexRadioDefault"
                              id="flexRadioDefault4" />
                              <label className="form-check-label" for="flexRadioDefault4">
                                  Cash on delivery
                              </label>
                      </div>
                      <div className="payment_filed_wrapper">
                          <div className="payment_card payment_toggle red">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <input value={bookData.cardNumber}
                                              onChange={handleInputChange} type="text" className="form-control bg_input"
                                              placeholder="Card number"/>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div value={bookData.cardNumber}
                                              onChange={handleInputChange} className="form-group">
                                          <input type="text" className="form-control bg_input"
                                              placeholder="Cardholder name"/>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <input value={bookData.expiryDate}
                                              onChange={handleInputChange} type="text" className="form-control bg_input"
                                              placeholder="Date of expiry"/>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <input value={bookData.expiryDate}
                                              onChange={handleInputChange} type="text" className="form-control bg_input"
                                              placeholder="Security code"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="paypal_payment payment_toggle green">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <input value={bookData.paypalPayment}
                                              onChange={handleInputChange}
                                               type="text" className="form-control bg_input"
                                              placeholder="Email Address"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="payoneer_payment payment_toggle black">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <input value={bookData.payoneerPayment}
                                              onChange={handleInputChange} type="text" className="form-control bg_input"
                                              placeholder="Email Address"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Comp2