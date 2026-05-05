import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="pt-[12vh] min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="py-20 text-center w-[90%] mx-auto border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's Build Your <span className="text-[#BF8B31]">Future Together</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Have questions about our programs, partnerships, or enrollment? Our team is ready to assist you. Reach out today.
        </p>
      </div>

      {/* Main Content */}
      <div className="py-20 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#BF8B31]/10 rounded-full flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#BF8B31]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Head Office</h3>
                  <p className="text-white/60 leading-relaxed">
                    Successway Edu Excel ICT Center<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#BF8B31]/10 rounded-full flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="w-5 h-5 text-[#BF8B31]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-white/60">+234 (0) 800 000 0000</p>
                  <p className="text-white/60">+234 (0) 811 111 1111</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#BF8B31]/10 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope className="w-5 h-5 text-[#BF8B31]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-white/60">hello@successwaydigital.org</p>
                  <p className="text-white/60">support@successwaydigital.org</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BF8B31] transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BF8B31] transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BF8B31] transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-3" data-aos="fade-left">
          <div className="bg-[#0f172a] border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#BF8B31] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
              <p className="text-white/60">We aim to respond to all inquiries within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-white/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#BF8B31] focus:ring-1 focus:ring-[#BF8B31] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#BF8B31] focus:ring-1 focus:ring-[#BF8B31] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-white/80">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#BF8B31] focus:ring-1 focus:ring-[#BF8B31] transition-all appearance-none"
                >
                  <option value="" disabled selected className="text-white/30">How can we help you today?</option>
                  <option value="enrollment">Course Enrollment</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">General Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-white/80">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#BF8B31] focus:ring-1 focus:ring-[#BF8B31] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#BF8B31] hover:bg-[#a67828] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
