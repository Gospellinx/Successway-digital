"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect (() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-600 w-12 h-12 flex items-center justify-center focus:outline-0 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )} 
    </div>
  )
}

export default ScrollToTop
