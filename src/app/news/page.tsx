import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articleData } from "../../../data/data";
import { BiHeart, BiTimeFive } from "react-icons/bi";

const NewsPage = () => {
  // Use the first article as the featured article for layout variety
  const featuredArticle = articleData[0];
  const regularArticles = articleData.slice(1);

  return (
    <div className="pt-[12vh] min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Latest <span className="text-[#BF8B31]">Insights & Updates</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Stay informed about our latest community outreach programs, training milestones, and success stories from our students.
        </p>
      </div>

      {/* Featured Article */}
      <div className="w-[90%] mx-auto mb-20">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl group flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-[300px] lg:h-[450px] overflow-hidden">
            <Image
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-[#BF8B31] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-lg">
              Featured News
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-3">
                <Image
                  src={featuredArticle.userImage}
                  alt={featuredArticle.username}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-[#BF8B31]/30"
                />
                <p className="text-sm font-semibold text-[#BF8B31] uppercase tracking-wide">
                  {featuredArticle.username}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-white/50 text-sm">
                <BiTimeFive className="text-lg" />
                <span>5 min read</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Discover how our recent initiatives are creating tangible impact in local communities. By equipping youths with highly demanded digital and vocational skills, we are seeing a transformative shift in career trajectories and financial independence.
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <button className="text-[#BF8B31] font-bold tracking-wide flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                Read Full Story <span>→</span>
              </button>
              <div className="flex items-center space-x-2 text-white/50">
                <BiHeart className="text-[#BF8B31] text-xl" />
                <span>{featuredArticle.reaction} Likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Articles Grid */}
      <div className="w-[90%] mx-auto pb-24">
        <h3 className="text-2xl font-bold mb-10 border-b border-white/10 pb-4">More Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regularArticles.map((article, index) => (
            <div 
              key={article.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl group flex flex-col"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={article.userImage}
                      alt={article.username}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-[#BF8B31]/30"
                    />
                    <p className="text-xs font-semibold text-[#BF8B31] uppercase tracking-wide">
                      {article.username}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-white/50 text-xs">
                    <BiTimeFive />
                    <span>3 min</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  Read about our latest efforts to bring guidance, counseling, and practical skills to those who need it most.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <button className="text-[#BF8B31] text-sm font-bold tracking-wide hover:text-white transition-colors">
                    Read More
                  </button>
                  <div className="flex items-center space-x-1 text-white/50 text-sm">
                    <BiHeart className="text-[#BF8B31]" />
                    <span>{article.reaction}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
