import Navbar from "../components/navbar";
import myphoto from "../assets/myphoto.jpg";
import { useEffect } from "react";
import Footer from "../components/footer";

export function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#cbcbcb] text-[#373F51]">
        <Navbar />
        <main className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
          <h1 className="text-5xl font-extrabold text-center mb-12">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src={myphoto}
              alt="Profile Picture"
              className="w-64 md:w-80 lg:w-96 rounded-full shadow-xl border-4 border-gray-300"
            />

            <div className="text-3xl font-medium space-y-4">
              <p>
                <span className="font-bold">Name:</span> Daffa Khoirul Faiz
              </p>
              <p>
                <span className="font-bold">Major:</span> Informatics
              </p>
              <p>
                <span className="font-bold">University:</span> Universitas
                Ciputra Surabaya
              </p>
              <p>
                <span className="font-bold">Email:</span> dkhoirul05@gmail.com
              </p>
            </div>
          </div>

          <section className="mt-12 space-y-8">
            <div className="bg-gray-700 text-white rounded-lg p-6 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                As an IT student and aspiring software developer, I specialize
                in mobile and web application development. My expertise includes
                Kotlin with Jetpack Compose for Android, React TS for frontend,
                Express TS for backend, and Laravel for full-stack solutions. I
                am passionate about building high-performance, scalable
                applications.
              </p>
            </div>

            <div className="bg-gray-700 text-white rounded-lg p-6 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg">
                {[
                  "JavaScript / TypeScript",
                  "PHP",
                  "Laravel",
                  "React",
                  "Kotlin Jetpack Compose",
                  "HTML & CSS",
                  "Express.js",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-600 px-4 py-2 rounded-lg shadow-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 text-white rounded-lg p-6 shadow-xl">
              <h2 className="text-3xl font-bold mb-4">My Experiences</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Student Assistant Algorithm and Programming Class",
                    duration: "September 2024 - January 2024",
                    description:
                      "Assisting students in understanding programming fundamentals and problem-solving techniques.",
                  },
                  {
                    title: "Student Assistant Web Programming Class",
                    duration: "February 2025 - Present",
                    description:
                      "Assisting students in web programming, web design, and modern web development tools.",
                  },
                  {
                    title: "Student Assistant Database Class",
                    duration: "February 2025 - Present",
                    description:
                      "Helping students understand relational database fundamentals, SQL, ERD, and database tools.",
                  },
                  {
                    title: "Advice Mentoring Department O-Week",
                    duration: "August 2024 - September 2024",
                    description:
                      "Guided new students during Orientation Week to help them adapt to university life.",
                  },
                ].map((exp, index) => (
                  <li
                    key={index}
                    className="bg-gray-600 p-4 rounded-lg shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.duration}</p>
                    <p className="mt-2 text-lg">{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
