import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Project } from "../components/project";

export function MyProject() {
  const projects = [
    {
      title: "Clicker Game",
      description:
        "Clicker game is a project website for my college assignment in website development course. This project uses React TS for the frontend and Express TS for the backend.",
      techStack: ["React TS", "Tailwind CSS", "Express TS"],
      url: "https://example.com/clicker-game",
    },
    {
      title: "Absenku",
      description:
        "Absenku is a website that can be used to record extracurricular attendance for students, teachers, and vendors who handle the extracurriculars.",
      techStack: ["Laravel", "Tailwind CSS"],
      url: "https://example.com/absenku",
    },
  ];
  useEffect(() => {
    document.title = "My Projects";
  }, []);
  return (
    <div>
      <Navbar />
      <main className="w-full md:px-16 py-8 px-5">
        <h1 className="text-[40px] font-extrabold text-[#373F51]">
          My Projects
        </h1>
        <div className="w-full">
          <div className="w-full space-y-5 mt-10 mx-auto flex flex-wrap gap-x-10 gap-y-5">
          {projects.map(({ title, description, techStack, url }, index) => (
              <Project
                key={index}
                title={title}
                description={description}
                url={url}
                image = { <img
                  src="https://source.unsplash.com/600x400/?technology"
                  alt="Project Thumbnail"
                  className="rounded-t-lg h-[270px] w-full"
                />}
              >
                {/* Image sebagai children */}
               
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {techStack.map((tech, idx) => (
                    <p
                      key={idx}
                      className="px-4 py-2 bg-[#373F51] rounded-lg text-white"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </Project>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
