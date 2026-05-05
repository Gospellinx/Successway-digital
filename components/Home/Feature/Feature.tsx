"use client";

import Image from "next/image";
import React from "react";
import { FaAward, FaCheck } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Feature = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f172a]">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 items-center gap-12 w-[90%] mx-auto">
        {/* Image */}
        <Tilt>
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="flex justify-center">
            <Image src="/images/f.png" alt="image" width={1000} height={1000} className="max-w-full ml-[-100px] h-auto" />
          </div>
        </Tilt>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#BF8B31]/10 border border-[#BF8B31]/20 rounded-full flex items-center justify-center flex-col">
              <FaAward className="w-6 h-6 text-[#BF8B31]" />
            </div>
            <h1 className="text-xl text-white/90 font-semibold tracking-wide">
              Guaranteed and Certified
            </h1>
          </div>
          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-white mt-8">
            Why choose us?
          </h1>
          {/* Description */}
          <div>
            <p className="text-white/70 mt-2">
              We provide opportunities that help you grow, learn valuable
              digital skills, and achieve financial independence through
              accessible and practical education.
            </p>
            {/* Features list */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#BF8B31] mt-1">✔</span>
                <p className="text-white/80">Earn a digital degree for free</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#BF8B31] mt-1">✔</span>
                <p className="text-white/80">Boost your productivity and workplace skills</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#BF8B31] mt-1">✔</span>
                <p className="text-white/80">Access free digital tools and equipment for learning</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#BF8B31] mt-1">✔</span>
                <p className="text-white/80">Become empowered and financially independent</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-[#BF8B31] text-white px-8 py-3 rounded-full hover:bg-[#a67828] transition-all font-semibold tracking-wide">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
