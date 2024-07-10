import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Productsidebar() {
    const [categoryData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://651a6056340309952f0d2d66.mockapi.io/Category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
        <div className="col-lg-3">
                    <div className="left_side_search_area">
                        
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Description</h5>
                            </div>
                            <div className="name_search_form">
                              <p>
                              {categoryData.description}
                              </p>
                                {/* <input type="text" className="form-control" placeholder="e.g Deluxe bus"/>
                                <i className="fas fa-search"></i> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
    </>
  )
}
