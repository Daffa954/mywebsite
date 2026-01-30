import { ArrowRightIcon } from "@heroicons/react/24/outline";
import myphoto from "../assets/fotoku2.jpeg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-10"></div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 1. Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="block mt-2 lg:inline lg:mt-0 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Daffa Khoirul Faiz
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-100 dark:text-gray-200 mb-4 sm:mb-6">
              3rd Year Informatics Student <span className="hidden sm:inline">|</span> <span className="block sm:inline">Web Developer</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
             Code. Study. Deliver. Ready to Create Impactful Digital Solutions.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/myprojects"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-blue-900 dark:text-gray-900 bg-white dark:bg-gray-100 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                View My Work
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              
              <a
                href="mailto:dkhoirul05@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white dark:text-gray-100 border-2 border-white/50 dark:border-gray-300/50 rounded-lg hover:bg-white/10 dark:hover:bg-gray-300/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-12 mt-8 sm:mt-12 pt-8 border-t border-white/20 dark:border-gray-600/50 w-full lg:w-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100">2+</div>
                <div className="text-blue-200 dark:text-gray-400 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100">5+</div>
                <div className="text-blue-200 dark:text-gray-400 text-sm sm:text-base">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* 2. Image/Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Container Responsif untuk Gambar */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[3/4]"> 
              
              {/* Floating Elements (Disesuaikan ukurannya agar tidak overflow di mobile) */}
              <div className="absolute top-10 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-blue-300/20 dark:bg-blue-400/10 rounded-2xl rotate-12 animate-float z-0"></div>
              <div className="absolute bottom-16 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/30 dark:bg-blue-500/20 rounded-full animate-float-delayed z-0"></div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 dark:bg-gray-400/10 rounded-lg rotate-45 animate-float-slow z-0"></div>
              
              {/* Profile Photo Wrapper */}
              <div className="absolute inset-0 z-10">
                <img 
                  src={myphoto} 
                  alt="Daffa Khoirul Faiz" 
                  className="w-full h-full object-cover shadow-2xl rounded-2xl border-4 border-white/20 dark:border-gray-400/20"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on very small height screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 dark:border-gray-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 dark:bg-gray-300/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}