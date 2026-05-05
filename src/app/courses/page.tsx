import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "../../../data/data";
import { FaCheckCircle, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const CoursesPage = () => {
  return (
    <div className="pt-[12vh] min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="py-20 bg-white/5 border-b border-white/10">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Our <span className="text-[#BF8B31]">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We offer hands-on, practical training designed to equip you with the exact skills needed to thrive in today's economy. Whether you're looking to code, create, or launch a business, we have a path for you.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-20 w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {coursesData.map((course, index) => (
            <div 
              key={course.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#BF8B31]/30 transition-all duration-300 shadow-xl flex flex-col md:flex-row group"
            >
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#BF8B31] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {course.category}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{course.title}</h2>
                  <p className="text-sm text-[#BF8B31] font-semibold mb-6 flex items-center gap-2">
                    <FaUserGraduate /> Taught by {course.author}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#BF8B31] mt-1 shrink-0" />
                      <p className="text-white/70 text-sm">Learn practical, job-ready skills through hands-on projects.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#BF8B31] mt-1 shrink-0" />
                      <p className="text-white/70 text-sm">Perfect for beginners looking to build a sustainable career.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#BF8B31] mt-1 shrink-0" />
                      <p className="text-white/70 text-sm">Includes {course.lessons} comprehensive modules.</p>
                    </div>
                  </div>
                </div>

                {/* Footer/CTA */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-white/50 text-sm">
                    <FaLaptopCode />
                    <span>{course.students} Enrolled</span>
                  </div>
                  <Link href="/contact">
                    <button className="text-[#BF8B31] font-bold hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300">
                      Enroll Now <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center w-[90%] mx-auto mb-10 bg-white/5 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which program is right for you?</h2>
        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
          Contact our guidance counselors today. We'll help you evaluate your interests and choose the path that best aligns with your career goals.
        </p>
        <Link href="/contact">
          <button className="bg-transparent border-2 border-[#BF8B31] text-[#BF8B31] hover:bg-[#BF8B31] hover:text-white px-8 py-3 rounded-full font-bold transition-all">
            Speak to a Counselor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesPage;
