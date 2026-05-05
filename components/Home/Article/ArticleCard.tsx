import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

// property type for article card
type Props = {
  article: {
    id: number;
    userImage: string;
    username: string;
    reaction: number;
    coverImage: string;
    title: string;
  };
};

const ArticleCard = ({ article }: Props) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl group">
      {/* Images */}
      <div className="overflow-hidden">
        <Image
          src={`${article.coverImage}`}
          alt={article.title}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* author and reaction */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={`${article.userImage}`}
              alt={article.username}
              width={40}
              height={40}
              className="rounded-full ring-2 ring-[#BF8B31]/30"
            />
            <p className="text-sm font-semibold text-[#BF8B31] tracking-wide uppercase">
              {article.username}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BiHeart className="text-[#BF8B31] text-xl" />
            <p className="text-sm font-medium text-white/80">{article.reaction}</p>
          </div>
        </div>
        {/* Heading */}
        <h1 className="text-xl font-bold text-white mt-5 mb-3">{article.title}</h1>
        <p className="text-sm text-white/70 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a quae repellat ducimus consectetur possimus provident dolorum aut. Fugit dolorem illo, beatae dignissimos praesentium labore veritatis illum exercitationem? Eum, voluptatem!</p>
        <button className="mt-5 mb-2 hover:text-white text-[#BF8B31] font-bold tracking-wide flex items-center gap-2 transition-colors">
          Learn More <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
