import React, { useEffect, useState } from "react";

import { fetchData } from "./api";

const TourBooking = () => {
  const [data, setData] = useState("");
  // const [registerData, setRegisterData] = useState({ name: "", email: "", phone: "" });
  useEffect(() => {
    fetchUserData();
  }, []);
  async function fetchUserData() {
    try {
      const userData = await fetchData(sessionStorage.getItem("userid"));
      setData(userData);

      // const tours = data.booking;
    } catch (error) {
      // Handle error
    }
  }
  console.log(data.booking);
  return (
    <>
      <div className="col-lg-8">
        <div className="dashboard_common_table">
          <h3>Tour booking</h3>
          <div className="table-responsive-lg table_common_area">
            {data.booking ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Sl no.</th>
                    <th>Booking Name</th>
                    <th>Booking type</th>
                    <th>Booking amount</th>
                    <th>Status</th>
              
                  </tr>
                </thead>
                <tbody>
                  {data.booking.map((element, index) => (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{element.name}</td>
                      <td>{element.tour_type
}</td>
                      <td>${element.price}</td>
                      <td className="complete">Completed</td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>No tours Yet !!</>
            )}
          </div>
        </div>
        <div className="pagination_area">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TourBooking;
