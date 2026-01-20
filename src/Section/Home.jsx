import React from "react";

const Home = () => {
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
          <div className="grid grid-cols-2 gap-3 w-80 ml-40 mt-24 ">
            <div className="rounded-2xl bg-[#ae7dec] h-40 ">1</div>
            <div className="rounded-2xl bg-[#e36f6f] h-fill  row-span-2">2</div>
            <div className="rounded-2xl bg-[#1a74c7] h-40 ">3</div>
            <div className="rounded-2xl bg-[#3a3d42] h-40 w-fill col-span-2">
              4
            </div>
            <div className="rounded-2xl bg-[#f1cf78] h-40 ">5</div>
            <div className="rounded-2xl bg-[#2ac88f] h-40 ">6</div>
          </div>
          <div>
            <img className="h-64 w-64" src="src/Assets/paper.png" alt="" />
            <img className="h-64 w-64" src="src/Assets/paper20.png" alt="" />
            <img className="h-64 w-64" src="src/Assets/paper40.png" alt="" />
            <img className="h-64 w-64" src="src/Assets/paper60.png" alt="" />
            <img className="h-64 w-64" src="src/Assets/paper80.png" alt="" />
            <img className="h-64 w-64" src="src/Assets/paper100.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
