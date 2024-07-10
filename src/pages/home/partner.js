import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Partner() {
  // Configuration for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust the number of slides to show at once
    slidesToScroll: 1,
    autoplay: true, // Set to true for auto-advancing slides
    autoplaySpeed: 2000, // Adjust the speed of auto-advancing
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
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
        {/* Repeat this div for each partner */}
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?w=740&t=st=1696593131~exp=1696593731~hmac=8eb381b628e580ffaffa2605e86d83fa54cac60d72532cce4702df36bf4a2c44"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/blue-circular-abstract-logo_1043-69.jpg?w=740&t=st=1696593212~exp=1696593812~hmac=a400a188234648658e4abcf90de0f92a4269014fd198a56c5ad0c56177aa7d48"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148606094.jpg?w=740&t=st=1696593245~exp=1696593845~hmac=59f0660161c3a127a8b3028fe927622b0a1cab1eaccf026e2c44070035886bcd"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/premium-vector/travel-agency-logo-concept_518759-226.jpg?w=740"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/premium-vector/travel-logo-design_79169-7.jpg?w=740"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148614180.jpg?w=740&t=st=1696593394~exp=1696593994~hmac=1853c805bf8e064f8dbbd1b0f789f6790b62b992f1fd46aca926f7291c98a447"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148619622.jpg?w=740&t=st=1696593462~exp=1696594062~hmac=c4da5aec08419ee8345ffaafdea3841e7e8ee6206fc9114a7da2df203b35068a"
              alt="logo"
            />
          </a>
        </div>
        <div className="partner_logo">
          <a href="#!">
            <img
              src="https://img.freepik.com/free-vector/symbol-travel-logolove-fly-isolated-vector-design_460848-10681.jpg?w=826&t=st=1696593589~exp=1696594189~hmac=3b475d3587fc2fe20b08b220b94447c431db34fe426ad7febd98cbe7e3d0cf80"
              alt="logo"
            />
          </a>
        </div>
        {/* End of repeated div */}
      </Slider>
    </div>
  );
}
