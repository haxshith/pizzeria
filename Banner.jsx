/* eslint-disable no-unused-vars */
import React from "react";
import BiryaniImg from "../../assets/pizzaaaa.png";
import { FaPizzaSlice } from 'react-icons/fa'
import { IoFastFood } from "react-icons/io5";
import { IoIosCar } from 'react-icons/io';

const Banner = () => {
  // eslint-disable-next-line no-unused-vars
  const bgImage = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-20 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-5xl font-serif">
                  Flavor,Aroma and Taste.
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce. 
                  <br />
                  <br />
                  pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot
                </p>
                <div className="flex gap-6">
                  <div>
                  <FaPizzaSlice className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-red-200 dark:bg-black-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                  <IoIosCar className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                </div>
                <div>
                 <button className="bg-red-500 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md hover:text-black">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
