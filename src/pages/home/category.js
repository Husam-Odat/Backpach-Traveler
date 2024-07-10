import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get("https://651a6056340309952f0d2d66.mockapi.io/Category")
      .get("https://668d6270099db4c579f2c90d.mockapi.io/Category/Category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="news_card_four_wrapper">
            <div className="news_card_four_img">
              <Nav.Link
                as={NavLink}
                exact
                to={`/product/${item.id}`}
              >
                <img
                  src={item.image}
                  alt="img"
                  style={{ width: "100%", height: "280px" }}
                />
              </Nav.Link>
            </div>
            <div className="news_card_four_heading text-center">
              <h3>
                {/* <a href={`/product/${item.id}`}>{item.name}</a> */}
                <Link
                  to={`/product/1`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  {item.name}
                </Link>
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
