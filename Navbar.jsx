/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Reviews",
    link: "/#Reviews",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-black dark:bg-gray-900 text-white duration-200 fixed top-0 left-0 w-full z-50">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-serif text-3xl sm:text-4xl flex gap-2">
                <img src={Logo} alt="Logo" className="max-w-[70px]" />
                PIZZERIO
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-red-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
