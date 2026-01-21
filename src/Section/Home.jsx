import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [paper, setPaper] = useState(0);
  const [activeService, setActiveService] = useState(null);

  const papers = [
    "src/Assets/paper.png",
    "src/Assets/paper20.png",
    "src/Assets/paper40.png",
    "src/Assets/paper60.png",
    "src/Assets/paper80.png",
    "src/Assets/paper100.png",
  ];
  return (
    <>
      <div className="w-full h-[300vh] bg-black">
        {/* text section */}
        <div className="pt-20 px-20  text-white">
          <h2 className="text-orange-400 font-bold">Explore Service</h2>
          <h2 className="font-bold text-2xl">
            WE HAVE DONE <br /> COUNTLESS WORK!
          </h2>
        </div>
        {/* text section end */}

        {/* images box START */}
        <div className="relative top-[100vh] justify-end flex gap-5">
          <img
            src="/src/Assets/boy.jpg"
            alt="Astronot"
            className="h-56 w-56 rounded-2xl"
          />
          <img
            src="/src/Assets/image.avif"
            alt="Astronot"
            className="h-56 w-56 rounded-2xl"
          />
          <img
            src="/src/Assets/m2.png"
            alt="Astronot"
            className="h-56 w-56 rounded-2xl"
          />
        </div>

        {/* images box end */}
        <div className="relative top-[50vh] text-white">
          <p className="font-medium text-2xl">
            Lorem ctetur adipisicing elit. Reiciendis, repellat.
          </p>
        </div>
      </div>
      {/* black section end */}

      <div className="bg-white h-screen w-full">
        <h2 className="text-3xl text-black font-bold">Lorem, ipsum dolor.</h2>
        <div className="flex items-center justify-around">
          <div className="grid grid-cols-2 gap-3 w-72 ml-40 mt-24 ">
            <div
              onMouseEnter={() => setActiveService("UIUX")}
              className="rounded-2xl bg-[#ae7dec] h-28 flex items-end justify-end px-4 text-white pb-4 font-bold text-3xl"
            >
              UI
              <br />
              UX
            </div>
            <div
              onMouseEnter={() => setActiveService("Branding")}
              className="rounded-2xl bg-[#e36f6f] row-span-2 px-4 text-white pb-4 font-bold text-3xl"
            >
              <p className="rotate-270 mt-48 ms-24">BRANDING</p>
            </div>
            <div
              onMouseEnter={() => setActiveService("VFX")}
              className="rounded-2xl bg-[#1a74c7] h-28 flex items-end justify-start px-4 text-white pb-4 font-bold text-3xl"
            >
              VFX
            </div>
            <div
              onMouseEnter={() => setActiveService("Development")}
              className="rounded-2xl bg-[#3a3d42] h-28 col-span-2 text-white text-3xl font-bold flex items-end justify-center"
            >
              DEVELOPMENT
            </div>
            <div
              onMouseEnter={() => setActiveService("B2B")}
              className="rounded-2xl bg-[#f1cf78] h-28 flex items-end justify-start"
            >
              <p className="text-black font-bold text-3xl ms-4">
                B<span className="text-2xl">2</span>B
              </p>
            </div>
            <div
              onMouseEnter={() => setActiveService("3D")}
              className="rounded-2xl bg-[#2ac88f] h-28 flex items-end justify-end text-black text-3xl font-bold"
            >
              <p className=" me-4 relative">3D</p>
            </div>
          </div>
          <div className="relative h-64 w-64">
            {papers.map((src, index) => {
              return (
                <motion.img
                  key={index}
                  src={src}
                  className="h-64 w-64 absolute inset-0"
                  animate={{ opacity: paper === index ? 1 : 0 }}
                  transition={{ duration: 2 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
