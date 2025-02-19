import { Card } from "../components/card";
import Hero from "../components/hero";
import heroimg from "../assets/hero.png";
import Navbar from "../components/navbar";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
      document.title = "Home";
    }, []);
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <main className="w-full bg-[#F8F9FA] py-8 md:px-16 px-5 border-t-4 border-gray-500">
          <h1 className="text-[40px] font-extrabold text-[#373F51] mt-8">
            My Latest Project
          </h1>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-5 mt-14">
            <Card
              title="Absenku Website"
              description="Absenku is a website that can be used to record extracurricular attendance for students, teachers, and vendors which handle the extracurriculars."
            >
              <img
                className="rounded-t-lg h-[270px] w-full"
                src={heroimg}
                alt=""
              />
            </Card>

            <Card
              title="EchoLearn App"
              description="EchoLearn is an application for learning English from songs which is equipped with speaking the lyrics feature which can help users to practice their pronunciation and listening features to help users understand the lyrics."
            >
              <img
                className="rounded-t-lg h-[270px] w-full"
                src={heroimg}
                alt=""
              />
            </Card>

            <Card
              title="Restaurant Website"
              description="Restaurant website is a website that can be used to order food  and see the menu of the restaurant."
            >
              <img
                className="rounded-t-lg h-[270px] w-full"
                src={heroimg}
                alt=""
              />
            </Card>
            <Card
              title="My First Website "
              description="This Website is my first website that I made using HTML, CSS Tailwind framework, and JavaScript for my college assignment."
            >
              <img
                className="rounded-t-lg h-[270px] w-full"
                src={heroimg}
                alt=""
              />
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
