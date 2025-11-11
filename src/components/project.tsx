import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  category?: string;
  image: React.ReactNode;
  children?: React.ReactNode;
}

export function Project({ 
  title, 
  description, 
  url, 
  category,
  image, 
  children 
}: ProjectProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      {image}
      
      {/* Content */}
      <div className="p-6">
        {/* Title & Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-blue-700 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Children (Tech Stack) */}
        {children}
        
        {/* Button */}
        <div className="mt-6">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}