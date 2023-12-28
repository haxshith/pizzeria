/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 ">
      <section className="max-w-[1200px] mx-auto ">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-4xl text-xl text-center font-serif sm:text-left text-justify mb-5 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[70px]" />
              PIZZERIO
            </h1>
            <p className="">
            Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce. {" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Banjara Hills, Hyderabad.</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 6302388908</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 text-center sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-6 px-4 ">
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            @copyrights all assured by Harshith upto 2069
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
