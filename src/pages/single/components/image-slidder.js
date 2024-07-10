// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const sliderSettings = {
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: true,
//   autoplay: true,
//   autoplaySpeed: 3500,
// };

// const ImageSlider = ({image1,image2,image3,image4}) => {
//   const sliderRef = useRef(null);

//   const pauseSlider = () => {
//     sliderRef.current.slickPause();
//   };

//   const resumeSlider = () => {
//     sliderRef.current.slickPlay();
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (slider) {
//       slider.slickPlay();
//     }
//   }, []);

//   return (
//     <div className="tour_details_img_wrapper">
//       <div className="slider slider-for">
//         <Slider {...sliderSettings} ref={sliderRef}>
//           <div>
//             <img
//               src={image1}
//               alt="img"
//             />
//           </div>
//           <div>
//             <img
//               src={image2}
//               alt="img"
//             />
//           </div>
//           <div>
//             <img
//               src={image3}
//               alt="img"
//             />
//           </div>
//           <div>
//             <img
//               src={image4}
//               alt="img"
//             />
//           </div>
          
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2200,
};

const ImageSlider = ({ image1, image2, image3, image4 }) => {
  const sliderRef = useRef(null);

  const pauseSlider = () => {
    sliderRef.current.slickPause();
  };

  const resumeSlider = () => {
    sliderRef.current.slickPlay();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.slickPlay();
    }
  }, []);

  return (
    <div className="tour_details_img_wrapper">
      <div className="slider slider-for">
        <Slider {...sliderSettings} ref={sliderRef}>
          <div>
            <img
              src={image1}
              alt="img"
              style={{ width: "100%", height: "480px" }} // Set the fixed size here
            />
          </div>
          <div>
            <img
              src={image2}
              alt="img"
              style={{ width: "100%", height: "480px" }} // Set the fixed size here
            />
          </div>
          <div>
            <img
              src={image3}
              alt="img"
              style={{ width: "100%", height: "480px" }} // Set the fixed size here
            />
          </div>
          <div>
            <img
              src={image4}
              alt="img"
              style={{ width: "100%", height: "480px" }} // Set the fixed size here
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
