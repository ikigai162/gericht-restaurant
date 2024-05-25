import React from "react";
import welcome from "./../assets/welcome.png";
import spoon from "./../assets/spoon.svg";

const Hero = () => (
  <section className="flex justify-between items-center p-8">
    <div className="flex flex-col items-start justify-start space-y-[32px] text-start">
      <p className=" font-cormorant text-xl space-y-2">
        Chase the new Flavour
        <img src={spoon} alt="spoon" />
      </p>

      <h1 className="font-cormorant text-8xl text-gold font-semibold">
        The key to Fine dining
      </h1>
      <p className=" text-pharagraph text-lg">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button className="pr-[32px] pl-[32px] pt-[8px] pb-[8px] bg-gold text-[#0C0B08] font-cormorant">
        Explore Menu
      </button>
    </div>
    <img src={welcome} alt="welcome" className="w-[667px] h-[736px]" />
  </section>
);
export default Hero;
