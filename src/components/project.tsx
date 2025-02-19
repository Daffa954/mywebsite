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
    <div className="w-full md:w-1/2 border-[1.4px] border-gray-300 rounded-lg">
      <div className="bg-white rounded-lg shadow-lg ">
        <img
          className="rounded-t-lg h-[270px] w-full"
          src="https://images.unsplash.com/photo-1612836787640-4b0b3e5f4c0f"
          alt=""
        />
        <div className="p-6 ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
        <div className="px-6 pt-3 pb-6">
          <h2 className="text-xl font-bold">Technology Used</h2>
          <div className="flex w-full gap-4 mt-4 text-xl text-white font-bold">
            {/* <p className="px-10 py-2 bg-[#373F51] rounded-lg">Laravel</p>
                    <p className="px-10 py-2 bg-[#373F51] rounded-lg">Tailwind CSS</p> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
