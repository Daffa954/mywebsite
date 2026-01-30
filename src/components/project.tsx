// src/components/project.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ProjectProps {
  title: string;
  description: string;
  id: string;
  // ✅ UPDATE: Izinkan string, array, atau object
  url: string | string[] | { [key: string]: string };
  category?: string;
  image: React.ReactNode;
  children?: React.ReactNode;
}

export function Project({ 
  title, 
  description, 
  id, 
  url, 
  category,
  image, 
  children 
}: ProjectProps) {

  // ✅ Helper Updated: Support Object, Array, & String
  const renderCodeButtons = () => {
    
    // KASUS 1: URL adalah Object (Key-Value pair)
    // Contoh: { "Front End": "...", "Back End": "..." }
    if (typeof url === 'object' && !Array.isArray(url) && url !== null) {
      return Object.entries(url).map(([key, link], index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 capitalize"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span className="hidden sm:inline">
            {key.replace(/_/g, ' ').replace(/-/g, ' ')}
          </span>
          {/* Untuk layar sangat kecil, tampilkan inisial atau ikon saja bisa diatur disini, tapi default hidden sm:inline sudah oke */}
        </a>
      ));
    }

    // KASUS 2: URL adalah Array (lebih dari 1 link, tapi tanpa nama key)
    if (Array.isArray(url)) {
      return url.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span className="hidden sm:inline">Repo {index + 1}</span>
          <span className="sm:hidden">#{index + 1}</span>
        </a>
      ));
    }

    // KASUS 3: URL adalah String (Single link)
    return (
      <a
        href={url as string}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        <span className="hidden sm:inline">Source Code</span>
        <span className="sm:hidden">Code</span>
      </a>
    );
  };

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      
      {/* 1. Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110">
           {image}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 pointer-events-none" />

        {/* Floating Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide backdrop-blur-md shadow-lg border border-white/20 ${
              category === "Full Stack" 
                ? "bg-emerald-500/90 text-white" 
                : category === "Mobile App"
                ? "bg-purple-500/90 text-white"
                : "bg-blue-600/90 text-white"
            }`}>
              {category}
            </span>
          </div>
        )}
      </div>
      
      {/* 2. Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <Link to={`/myprojects/${id}`} className="block">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Tech Stack Pills */}
        <div className="mb-6 flex-grow">
            <div className="flex flex-wrap gap-2">
                {children}
            </div>
        </div>
        
        {/* 3. Action Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4 flex-wrap">
          
          {/* ✅ Wrapper dengan flex-wrap agar kalau tombolnya banyak tidak berantakan */}
          <div className="flex gap-4 flex-wrap">
            {renderCodeButtons()}
          </div>

          {/* View Details Button */}
          <Link
            to={`/myprojects/${id}`}
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 dark:hover:bg-gray-200 transition-all duration-300 ml-auto"
          >
            Details
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}