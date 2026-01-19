import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Project } from "../components/project";
import { projects } from "../data/experience";

export function MyProject() {
  useEffect(() => {
    document.title = "My Projects";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      {/* Main Content dengan Gradient Background yang mendukung Dark Mode */}
      <main className="w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex-grow transition-colors duration-300">
        <div className="w-full mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4 transition-colors duration-300">
              My Projects
            </h1>
            <p className="text-xl text-blue-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Here are some of the projects I've worked during my academic journey. Each one represents a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-12 ">
            {projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                id={String(project.id)} // Pastikan convert ke string
                url={project.url}
                category={project.category}
                image={
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
                  />
                }
              >
                {/* Tech Stack Badges - Updated for Dark Mode */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200/50 
                                 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700/50
                                 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Project>
            ))}
          </div>

          {/* Call to Action - Updated for Dark Mode */}
          <div className="text-center mt-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-gray-700 p-8 max-w-2xl mx-auto transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-blue-700 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
