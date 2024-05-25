import React from "react";
import welcome from "./../assets/welcome.png";
import spoon from "./../assets/spoon.svg";

const Hero = () => (
  <section className="flex justify-between items-center p-8">
    <div className="text-white text-lg -rotate-90 flex gap-10">
      <p className="">#Bar</p>
      <p className="">#Gericht</p>
    </div>
    <div className="flex gap-[180px] items-center">
      <div className="flex flex-col items-start justify-center space-y-[32px] text-start">
        <p className=" font-cormorant text-xl space-y-2 text-white">
          Chase the new Flavour
          <img src={spoon} alt="spoon" />
        </p>
        <h1 className="font-cormorant text-8xl text-gold font-semibold leading-[117px]">
          The key to Fine dining
        </h1>
        <p className="font-open text-pharagraph text-lg text-[#AAAAAA]">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="pr-[32px] pl-[32px] pt-[8px] pb-[8px] bg-gold text-[#0C0B08] font-cormorant text-lg font-bold">
          Explore Menu
        </button>
      </div>
      <img src={welcome} alt="welcome" className="w-[667px] h-[736px]" />
      
    </div>
    
    <div className="items-end justify-end flex">
      <div className="w-[61px] h-[1px] bg-[#DCCA87] rotate-90"></div>
      <a href="#" className="text-[#DCCA87] uppercase font-cormorant font-bold text-lg">
        Scroll
      </a>
    </div>
  </section>
);
export default Hero;
