import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Project } from "../components/project";
import hero from "../assets/hero.png";

export function MyProject() {
  const projects = [
    {
      title: "Clicker Game",
      description:
        "Clicker game is a project website for my college assignment in website development course. This project uses React TS for the frontend and Express TS for the backend.",
      techStack: ["React TS", "Tailwind CSS", "Express TS", "TypeScript", "Node.js"],
      image: hero,
      url: "https://github.com/yourusername/clicker-game",
      category: "Full Stack"
    },
    {
      title: "Absenku",
      description:
        "Absenku is a website that can be used to record extracurricular attendance for students, teachers, and vendors who handle the extracurriculars.",
      techStack: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
      image: hero,
      url: "https://github.com/yourusername/absenku",
      category: "Full Stack"
    },
    {
      title: "Echolearn",
      description:
        "EchoLearn is an application for learning English from songs which is equipped with speaking the lyrics feature which can help users to practice their pronunciation and listening features to help users understand the lyrics.",
      techStack: ["Express TS", "Kotlin", "Jetpack Compose", "Android", "TypeScript"],
      image: hero,
      url: "https://github.com/yourusername/echolearn",
      category: "Mobile App"
    },
    {
      title: "Restaurant Website",
      description:
        "Restaurant website is a website that can be used to order food and see the menu of the restaurant with modern UI/UX design.",
      techStack: ["React", "Express.js", "MongoDB", "Node.js"],
      image: hero,
      url: "https://github.com/yourusername/restaurant-website",
      category: "Full Stack"
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and TypeScript to showcase my projects and skills as a web developer.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: hero,
      url: "https://github.com/yourusername/portfolio",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description:
        "A full-stack task management application with real-time updates, user authentication, and drag-and-drop functionality.",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      image: hero,
      url: "https://github.com/yourusername/taskapp",
      category: "Full Stack"
    }
  ];

  useEffect(() => {
    document.title = "My Projects";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents 
              a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                url={project.url}
                category={project.category}
                image={
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-t-xl h-48 w-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === "Full Stack" 
                          ? "bg-green-100 text-green-800" 
                          : project.category === "Mobile App"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                }
              >
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Project>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-blue-700 mb-6">
                I'm always open to discussing new opportunities and interesting projects.
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