export function Project({
  title,
  description,
  children,
  image,
  url = "#",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  image: React.ReactNode;
  url?: string;
}) {
  return (
    <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg ">
                {/* <img
                  className="rounded-t-lg h-[270px] w-full"
                  src="https://images.unsplash.com/photo-1612836787640-4b0b3e5f4c0f"
                  alt=""
                /> */}
                {image}
                <div className="p-6 ">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-gray-500 mt-2">
                   {description}
                  </p>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">Technology Used</h2>
                    <div className="flex w-full gap-4 mt-4 text-xl text-white font-bold">
                      {/* <p className="px-10 py-2 bg-[#373F51] rounded-lg">
                        Laravel
                      </p>
                      <p className="px-10 py-2 bg-[#373F51] rounded-lg">
                        Tailwind CSS
                      </p> */}
                      {children}
                    </div>
                  </div>
                  <div className="w-1/2 bg-blue-500 mt-4 flex py-3 px-4 items-center rounded-lg gap-7">
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
                    <a href={url} className="text-xl font-semibold text-white">
                      Visit My Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
  );
}
