import React from "react";
import { navLinks } from "../constants/data";

const Navbar = () => (
  <div className="flex justify-between items-center text-center font-open p-[48px] text-[#FFFFFF]">
    <div className="font-bold text-3xl uppercase font-cormorant">
      <a href="#">Gerícht</a>
    </div>
    <ul className="flex gap-[32px] font-open">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex font-open_sans items-center gap-[50px] ">
      <a
        href="#"
        className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Log in / Registration
      </a>
      <div className="h-[57px] w-[0.5px] bg-white"></div>
      <a
        href="#"
        className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Book Table
      </a>
    </div>
  </div>
);

export default Navbar;
