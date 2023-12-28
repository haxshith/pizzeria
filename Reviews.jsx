/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";

const testimonialData = [
  {
    id: 1,
    name: "Tharun",
    text: "very nice taste of pizza and i loved the taste it is very taste i love pizza i dont know hindi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUojVud2KE5j2zyU-70mpzFYn_7YGpAffBXEhljH61MA&s",
  },
  {
    id: 1,
    name: "Shishiro",
    text: "Pizza thini kallu thirigi padipoya bro worst taste",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUojVud2KE5j2zyU-70mpzFYn_7YGpAffBXEhljH61MA&s",
  },
  {
    id: 1,
    name: "Bala",
    text: "very nice taste of pizza and i loved the taste it is very taste i love pizza sexy pizza anna",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUojVud2KE5j2zyU-70mpzFYn_7YGpAffBXEhljH61MA&s",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-19 max-w-[300px] mx-auto">
           <p className="text-md bg-clip-text text-red-500">
              What our customers say
            </p>
            <h1 className="text-7xl font-serif">Reviews</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
