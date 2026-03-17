"use client";

import Image from "next/image";
import React from "react";
import { FaAward, FaCheck } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 items-center gap-12 w-[90%] mx-auto">
        {/* Image */}
        <Tilt>
          <div className="flex justify-center">
            <Image src="/images/f.png" alt="image" width={1000} height={1000} className="max-w-full ml-[-100px] h-auto" />
          </div>
        </Tilt>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-700 rounded-full flex items-center justify-center flex-col">
              <FaAward className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Guranteed and Certified
            </h1>
          </div>
          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-black mt-8">
            Why choose us?
          </h1>
          {/* Description */}
          <div>
            <p className="text-gray-600 mt-2">
              We provide opportunities that help you grow, learn valuable
              digital skills, and achieve financial independence through
              accessible and practical education.
            </p>
            {/* Features list */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-rose-700 mt-1">✔</span>
                <p>Earn a digital degree for free</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-rose-700 mt-1">✔</span>
                <p>Boost your productivity and workplace skills</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-rose-700 mt-1">✔</span>
                <p>Access free digital tools and equipment for learning</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-rose-700 mt-1">✔</span>
                <p>Become empowered and financially independent</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
