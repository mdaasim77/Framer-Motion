import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [paper, setPaper] = useState(0);
  const [activeService, setActiveService] = useState(null);

  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.35], [0, 30]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.35], [0, 40]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.35], [0, 35]);

  const papers = [
    "src/Assets/paper.png",
    "src/Assets/paper20.png",
    "src/Assets/paper40.png",
    "src/Assets/paper60.png",
    "src/Assets/paper80.png",
    "src/Assets/paper100.png",
  ];

  useEffect(() => {
    if (!activeService) return;

    // close paper first
    setPaper(0);

    let step = 0;

    const interval = setInterval(() => {
      step++;
      setPaper(step);

      if (step === papers.length - 1) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [activeService]);

  const serviceContent = {
    UIUX: {
      title: "UI / UX Design",
      desc: "We design user-friendly and visually appealing interfaces focused on usability and experience.",
    },
    Branding: {
      title: "Branding",
      desc: "We build strong brand identities with consistent visuals and messaging.",
    },
    VFX: {
      title: "VFX",
      desc: "High-quality motion graphics and visual effects for modern products.",
    },
    Development: {
      title: "Development",
      desc: "Scalable and performant web and application development solutions.",
    },
    B2B: {
      title: "B2B Solutions",
      desc: "Business-focused solutions designed for enterprise and long-term growth.",
    },
    "3D": {
      title: "3D Design",
      desc: "3D visuals and assets for products, branding, and marketing.",
    },
  };

  return (
    <>
      <div className="w-full min-h-[200vh] relative bg-black">
        {/* text section */}
        <div className="pt-20 px-20  text-white sticky top-4">
          <h2 className="text-orange-400 font-bold">Explore Service</h2>
          <h2 className="font-bold text-2xl">
            WE HAVE DONE <br /> COUNTLESS WORK!
          </h2>
        </div>
        {/* text section end */}

        {/* images box START */}
        <div className="relative top-[35vh]">
          <motion.div style={{ x, y }} className=" justify-end flex gap-5">
            <motion.img
              src="/src/Assets/boy.jpg"
              alt="Astronot"
              className="h-56 w-56 rounded-2xl"
              style={{ rotate: rotate1 }}
            />
            <motion.img
              src="/src/Assets/image.avif"
              alt="Astronot"
              className="h-56 w-56 rounded-2xl"
              style={{ rotate: rotate2 }}
            />
            <motion.img
              src="/src/Assets/m2.png"
              alt="Astronot"
              className="h-56 w-56 rounded-2xl"
              style={{ rotate: rotate3 }}
            />
          </motion.div>
        </div>

        {/* images box end */}
        <div className="sticky top-[88vh] overflow-hidden bg-black py-6">
          <motion.div
            className="flex whitespace-nowrap text-white text-4xl font-bold"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 12,
              ease: "linear",
            }}
          >
            <span className="mr-10">
              NOW SHARE NOW SHARE NOW SHARE NOW SHARE NOW SHARE
            </span>
            <span className="mr-10">
              NOW SHARE NOW SHARE NOW SHARE NOW SHARE NOW SHARE
            </span>
          </motion.div>
        </div>
      </div>
      {/* black section end */}

      <div className="bg-gray-200 min-h-screen w-full">
        <div className="overflow-hidden bg-gray-200 py-4">
          <motion.h2
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 12,
              ease: "linear",
            }}
            className="flex whitespace-nowrap text-4xl text-black font-bold"
          >
            CREATIVE CONTENT CREATIVE CONTENT
            <span className="mr-10">CREATIVE CONTENT CREATIVE CONTENT</span>
            <span className="mr-10">CREATIVE CONTENT CREATIVE CONTENT</span>
          </motion.h2>
        </div>
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

          {/*  */}
          <div className="relative h-64 w-64">
            {papers.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                className="absolute inset-0 h-64 w-64"
                animate={{ opacity: paper === index ? 1 : 0 }}
              />
            ))}

            {/* TEXT CONTENT ON PAPER */}
            {activeService && paper === papers.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                <h3 className="text-lg font-bold text-black">
                  {serviceContent[activeService].title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {serviceContent[activeService].desc}
                </p>
              </motion.div>
            )}
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Home;
