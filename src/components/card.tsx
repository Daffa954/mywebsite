import React from "react";

export function Card({
  title,
  description,
  children,
  url = "#",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  url?: string;
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <div className="p-6">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-3 text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-200">
            {title}
          </h5>
        </a>
        <p className="mb-4 text-blue-800 leading-relaxed">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View Code
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}