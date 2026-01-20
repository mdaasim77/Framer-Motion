import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[300vh] bg-black">
      {/* text section */}
      <div className="absolute top-20 left-20 text-white">
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
  );
};

export default Home;
