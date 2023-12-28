/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Pizza2 from "../../assets/pizza3.png";
const ServicesData = [
  {
    id: 1,
    img: Pizza2,
    name: "CHICKEN PIZZA",
    description:
      "pizza is very delicious and very great in taste very rich in taste.",
  },
  {
    id: 2,
    img: Pizza2,
    name: "PANNER TIKKA PIZZA",
    description:
      "pizza is very delicious and very great in taste very rich in taste.",
  },
  {
    id: 3,
    img: Pizza2,
    name: "CORN PIZZA",
    description:
      "pizza is very delicious and very great in taste very rich in taste.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-12">
        <div className="container">
          <div className="text-center mb-20 max-w-[300px] mx-auto">
           <p className="text-md bg-clip-text text-red-500 bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-7xl font-serif">Services</h1>
            <p className="text-xs text-gray-400">
              pizza is great delicious dish served with many toppings on top and very tasty in taste with all
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white font-serif dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[250px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
