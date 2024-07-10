import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Trending.css'; // Create a CSS file for custom styles (Trending.css)
import axios from 'axios'; // Import axios or your preferred HTTP library
import {Link } from "react-router-dom";


export default function Trending() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('https://651a6056340309952f0d2d66.mockapi.io/Category')
      .then((response) => {
        // Filter tours with a rating above 4.5
        const filteredTours = response.data.reduce((acc, category) => {
          const categoryTours = category.tour.filter((tour) => tour.n_reviews > 40);
          return [...acc, ...categoryTours];
        }, []);
        setTours(filteredTours);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="col-lg-12">
      <Slider {...settings}>
        {tours.map((tour) => (
          <div className="theme_common_box_two img_hover slider-container" key={tour.id}>
            {/* Tour card content */}
            <div className="theme_two_box_img">
            <Link
                  as={Link}
                  exact
                  to={`/single/${tour.id}`} // Include the tour id as a URL parameter
                >
                  <img src={tour.image1} alt="img" />
                </Link>
              {/* <a href={tour.link}>
                <img src={tour.image1} alt={tour.name} />
              </a> */}
              <p>
                <i className="fas fa-map-marker-alt"></i> {tour.location}
              </p>
            </div>
            <div className="theme_two_box_content">
              <h4>
                <a href={tour.link}>{tour.name}</a>
              </h4>
              <p>
                <span className="review_rating">{tour.rating}/5 Excellent</span>{' '}
                <span className="review_count">({tour.n_reviews} reviews)</span>
              </p>
              <h3>
                ${tour.price} <span>Price starts from</span>
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
