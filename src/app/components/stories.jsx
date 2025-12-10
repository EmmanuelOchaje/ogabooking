import React from "react";
import { ChevronRight } from "lucide-react";
import plane from "../../images/plane.png";
import Image from "next/image";

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "Chasing Twin Adventures in Southern Iceland",
      image:
        "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "ogabooking Travel Blog",
    },
    {
      id: 2,
      title:
        "Journey to the Natural Mirror That Makes You Feel Like You Can Walk On the Sky",
      image:
        "https://images.unsplash.com/photo-1579884861801-8c7a2d9ae356?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "ogabooking Travel Blog",
    },
    {
      id: 3,
      title: "Uncover the Magic of Alberta's Sparkling Bubble Lake",
      image:
        "https://images.unsplash.com/photo-1617507264019-c35eb8bc0527?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "ogabooking Travel Blog",
    },
  ];

  return (
    <div className="bg-white py-4 md:py-12 lg:py-1">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* header */}
        <div className="flex items-center justify-between mb-6 md:mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            Stories
          </h2>
          <button className="flex items-center gap-1 text-lime-600 font-medium transition-colors text-sm md:text-base">
            See all stories
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
            >
              {/* image */}
              <div className="relative h-48 md:h-38 lg:h-50 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-4 md:p-6">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3 md:mb-4 leading-snug">
                  {story.title}
                </h3>

                {/* author */}
                <div className="flex items-center gap-2">
                  <div className="bg-lime-400 border-[#33880c] border-3 rounded-lg p-[3px]">
                    <Image src={plane} className="w-3" alt="" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-600">
                    {story.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
