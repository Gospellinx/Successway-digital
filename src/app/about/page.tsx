import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGraduationCap, FaLaptopCode, FaGlobeAfrica } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="pt-[12vh] min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="py-20 bg-white/5 border-b border-white/10">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Africa's Future, <span className="text-[#BF8B31]">One Skill at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Successway Digital & Vocational Guidance Foundation is dedicated to bridging the digital divide by providing free, high-quality digital literacy and vocational training to youths and teenagers across Africa.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            {/* Placeholder for an actual team/student image */}
            <Image 
              src="/images/youth-empowerment.jpg" 
              alt="Students learning" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80"></div>
          </div>
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story & Mission</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            We started with a simple belief: <strong className="text-white">talent is universal, but opportunity is not.</strong> In a rapidly evolving digital economy, millions of young Africans are left behind simply due to a lack of access to fundamental training and mentorship.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Successway Digital was founded to change this narrative. By offering hands-on training in digital tech, web design, tailoring, catering, and career development, we help youths unlock their potential, discover their true purpose, and build sustainable, financially independent careers.
          </p>
          <Link href="/contact">
            <button className="bg-[#BF8B31] hover:bg-[#a67828] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
              Join Our Mission
            </button>
          </Link>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-white/5 border-y border-white/10">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-white/60 max-w-2xl mx-auto">The principles that drive our commitment to youth empowerment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-[#BF8B31]/50 transition-colors shadow-xl">
              <div className="w-14 h-14 bg-[#BF8B31]/10 rounded-full flex items-center justify-center mb-6">
                <FaGlobeAfrica className="w-7 h-7 text-[#BF8B31]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Accessibility</h3>
              <p className="text-white/70 leading-relaxed">
                We believe education should be a right, not a privilege. We provide our high-quality training and resources completely free to ensure financial barriers never stop a willing learner.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-[#BF8B31]/50 transition-colors shadow-xl">
              <div className="w-14 h-14 bg-[#BF8B31]/10 rounded-full flex items-center justify-center mb-6">
                <FaGraduationCap className="w-7 h-7 text-[#BF8B31]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Empowerment</h3>
              <p className="text-white/70 leading-relaxed">
                We don't just teach skills; we build careers. Our goal is to equip every student with the practical knowledge needed to become financially independent and leaders in their communities.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-[#BF8B31]/50 transition-colors shadow-xl">
              <div className="w-14 h-14 bg-[#BF8B31]/10 rounded-full flex items-center justify-center mb-6">
                <FaLaptopCode className="w-7 h-7 text-[#BF8B31]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-white/70 leading-relaxed">
                The digital world moves fast, and so do we. We continuously update our curriculum to ensure our students learn the most relevant, in-demand technical and vocational skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 text-center w-[90%] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Unlock Your Potential?</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Take the first step towards a sustainable career. Explore our free digital and vocational training programs today.
        </p>
        <Link href="/courses">
          <button className="bg-[#BF8B31] hover:bg-[#a67828] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Explore Our Programs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
