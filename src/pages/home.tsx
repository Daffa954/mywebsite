import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import FooterWeb from "../components/footer";
import { organizationExperiences, workExperiences } from "../data/experience";
import { ExperienceCard } from "../components/experienceCard";
import myphoto from "../assets/foto2.webp";
// ✅ Pastikan import ini ada
import { motion, Variants } from "framer-motion";

export function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  // ✅ Konfigurasi animasi
  const fadeInUp: Variants= {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed w-full z-50 ">
        <Navbar />
      </div>

      <Hero />

      <main className="w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 pt-8 pb-24 md:px-16 px-5 flex-grow">
        
        {/* --- About Me Section --- */}
        <motion.section 
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-gray-700/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-6">
                  About Me
                </h2>
                <p className="text-blue-800 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Hello! I'm a passionate web developer with expertise in modern
                  technologies like React, TypeScript, and Tailwind CSS. I love
                  creating beautiful, functional, and user-friendly web
                  applications.
                </p>
                <p className="text-blue-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  With a strong foundation in both frontend and backend
                  development, I strive to deliver high-quality solutions that
                  meet user needs and business requirements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                    React
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                    Node.js
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full shadow-xl flex items-center justify-center">
                  <img
                    src={myphoto}
                    alt="Daffa Khoirul Faiz"
                    className="w-52 h-52 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Work Experience Section --- */}
        <motion.section 
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-gray-700/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-2 text-center">
             Work Experience
            </h2>
            <p className="text-blue-700 dark:text-gray-400 text-lg mb-8 text-center">
              My journey in work
            </p>

            <div className="space-y-6">
              {workExperiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- Organization Experience Section --- */}
        <motion.section 
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-gray-700/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-2 text-center">
              Organization Experience
            </h2>
            <p className="text-blue-700 dark:text-gray-400 text-lg mb-8 text-center">
              Teamwork experiences during college
            </p>

            <div className="space-y-6">
              {organizationExperiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- Projects Preview Section --- */}
        <motion.section 
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-gray-700/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-2 text-center">
              Featured Projects
            </h2>
            <p className="text-blue-700 dark:text-gray-400 text-lg mb-8 text-center">
              Check out some of my recent work
            </p>

            <div className="text-center">
              <a
                href="/myprojects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View All Projects
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <FooterWeb />
    </div>
  );
}