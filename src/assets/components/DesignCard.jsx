import React, { useState } from "react";

const DesignCard = ({
  title,
  author,
  likes,
  views,
  bgColor,
  textColor = "text-white",
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div
        className={`${bgColor} rounded-xl aspect-[4/3] p-8 mb-4 relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}
      >
        <div className={`${textColor} font-bold text-lg mb-2 line-clamp-2`}>
          {title}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className={`${textColor} opacity-80 text-sm truncate mr-2`}>
            by {author}
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`${textColor} opacity-80 text-sm flex items-center hover:opacity-100 transition-opacity`}
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              aria-label={`${isLiked ? "Unlike" : "Like"} this design`}
            >
              <svg
                className={`w-4 h-4 mr-1 transition-colors ${
                  isLiked ? "fill-red-500 text-red-500" : "fill-current"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {likes}
            </button>
            <div
              className={`${textColor} opacity-80 text-sm flex items-center`}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {views}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div
            className={`w-10 h-10 ${
              bgColor === "bg-gray-800" ? "bg-white" : "bg-white/20"
            } rounded-full backdrop-blur-sm`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
