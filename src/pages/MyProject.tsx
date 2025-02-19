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
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
