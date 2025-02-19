import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export function MyProject() {
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
          <div className="w-full space-y-5 mt-10 mx-auto flex flex-wrap gap-x-4 gap-y-5">
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg ">
                <img
                  className="rounded-t-lg h-[270px] w-full"
                  src="https://images.unsplash.com/photo-1612836787640-4b0b3e5f4c0f"
                  alt=""
                />
                <div className="p-6 ">
                  <h2 className="text-2xl font-bold">Absenku Website</h2>
                  <p className="text-gray-500 mt-2">
                    Absenku is a website that can be used to record
                    extracurricular attendance for students, teachers, and
                    vendors which handle the extracurriculars.
                  </p>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">Technology Used</h2>
                    <div className="flex w-full gap-4 mt-4 text-xl text-white font-bold">
                      <p className="px-10 py-2 bg-[#373F51] rounded-lg">
                        Laravel
                      </p>
                      <p className="px-10 py-2 bg-[#373F51] rounded-lg">
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-blue-500 mt-4 flex py-2 px-3 items-center rounded-lg gap-7">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="white"
                        className="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                        />
                      </svg>
                    </div>
                    <a href="" className="text-xl font-semibold text-white">
                      Visit My Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
