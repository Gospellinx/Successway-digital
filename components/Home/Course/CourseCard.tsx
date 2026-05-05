"use client";

import Image from "next/image";
import React from "react";
import { FaFile, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

// define the type
type Props = {
  course: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
  };
};

const CourseCard = ({ course }: Props) => {
  return (
    <Tilt>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl cursor-pointer overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl">
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={400}
            className="w-full h-68 object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          {/* Prices tag */}
          {/* <h1 className="ml-auto relative z-10 h-20 w-20 flex items-center text-lg font-bold justify-center flex-col -mt-16 rounded-full bg-rose-700 text-white">
            ₦{course.price.toLocaleString()}
          </h1> */}
          {/* information */}
          <div className="flex items-center mt-6 space-x-4">
            <span className="text-lg text-[#BF8B31] font-bold">
              {course.category}
            </span>
            <span className="text-base text-white/60">{course.author}</span>
          </div>
          {/* title */}
          <h1 className="text-xl font-bold mt-2 text-white xl:truncate">{course.title}</h1>
          {/* reviews */}
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center">
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
              <FaStar className="w-4 h-4 text-[#BF8B31]" />
            </div>
            <span className="text-base text-white/60 font-semibold">
              ({course.reviewNumber} Reviews)
            </span>
          </div>
          {/* line up */}
          <div className="mt-6 mb-6 w-full h-[1px] bg-white/10"></div>
          {/* lessons */}
          <div className="flex mb-8 items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaFile className="w-4 h-4 text-[#BF8B31]" />
              <p className="text-base font-semibold text-white/80">
                {course.lessons} Lessons
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserGroup className="w-4 h-4 text-[#BF8B31]" />
              <p className="text-base font-semibold text-white/80">
                {course.students} Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CourseCard;
