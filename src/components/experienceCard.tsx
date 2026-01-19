
interface Experience {
  period: string;
  type: string;
  position: string;
  company: string;
  responsibilities: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-700/50 rounded-xl shadow-lg border border-blue-200/30 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Date & Type Section */}
      <div className="md:w-1/4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg p-4 shadow-sm border border-blue-400/20 dark:border-blue-500/30 text-white">
          <p className="font-semibold text-blue-50 dark:text-blue-100">{experience.period}</p>
          <p className="text-blue-100 dark:text-blue-200 text-sm mt-1 bg-white/20 dark:bg-white/10 rounded-full px-2 py-1 inline-block">
            {experience.type}
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="md:w-3/4">
        <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-2">{experience.position}</h3>
        <p className="text-blue-600 dark:text-gray-300 font-semibold mb-4 flex items-center">
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>
          {experience.company}
        </p>
        
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li 
              key={index} 
              className="text-blue-600 dark:text-gray-400 flex items-start space-x-3"
            >
              <svg 
                className="w-5 h-5 text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}