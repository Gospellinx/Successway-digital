import React from "react";
import { BsQuote } from "react-icons/bs";

const Review = () => {
  return (
    <div className="pt-20 pb-16 bg-black">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        {/* Text Content */}
        <div className="xl:col-span-1 mt-6 ">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-700 rounded-full flex items-center justify-center flex-col">
              <BsQuote className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-white font-semibold">
              Student's Review
            </h1>
          </div>
          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-white mt-8">
            What our students say...
          </h1>
          {/* Description */}
          <div>
            <p className="text-gray-300 mt-2">
              Hear from our students about their transformative experiences with Successway Digital and Vocational Guidance Foundation. Discover how our practical training and supportive community have empowered them to unlock their potential, gain valuable skills, and build sustainable careers in the digital world.
            </p>
            {/* info */}
            <div className="flex items-center space-x-10 mt-8">
              <p className="text-white font-bold text-5xl">95%</p>
              <p className="text-white">Student's Complete <br /> Course Successfully</p>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="xl:col-span-2"></div>
      </div>
    </div>
  );
};

export default Review;
