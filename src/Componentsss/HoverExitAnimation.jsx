import React from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";

export default function HoverExitAnimation() {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white flex flex-col h-5/6 w-72 shadow-2xl rounded-2xl "
          >
            <h2 className="text-[14px] font-bold text-start ms-4  mt-4 pt-1 text-gray-500">
              Lorem, ipsum dolor.
            </h2>
            <p className="text-start text-[14px] ms-4  mt-4  pt-1 text-gray-500">
              Lorem ipsum vitae illo doloremque sint facilis officia?
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="py-2 text-[12px]  shadow-2xl px-3 flex gap-1 rounded-lg mt-2 text-center"
              >
                <img
                  width={"16px"}
                  height={"10px"}
                  src="/src/Assets/Logo.png"
                  className="bg-gray-500 rounded mt-0.5 me-1.5"
                />
                Aceternity
                <img
                  src="/src/Assets/close.svg"
                  width={"10px"}
                  height={"10px"}
                  alt=""
                />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 m-4 border relative border-gray-200 rounded">
              {/* Motion Divs Start here */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full w-full rounded border border-gr absolute bg-gray-100 divide-y "
              >
                <div className="flex p-4 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                  <div>
                    <h2 className="text-[14px] text-gray-500 font-bold">
                      Mail UI Components
                    </h2>
                    <p className="text-[12px] text-gray-500">
                      A collection of Mail Components
                    </p>
                  </div>
                </div>
                <div className="flex p-4 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9v4" />
                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
                    <path d="M12 16h.01" />
                  </svg>
                  <div>
                    <h2 className="text-[14px] text-gray-500 font-bold">
                      Warning UI Components
                    </h2>
                    <p className="text-[12px] text-gray-500">
                      Danger Drive carefully & be safe !
                    </p>
                  </div>
                </div>
                <div className="flex p-4 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-trash"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                    <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
                  </svg>
                  <div>
                    <h2 className="text-[14px] text-gray-500 font-bold">Bin</h2>
                    <p className="text-[12px] text-gray-500">
                      Use Bin for recycle{" "}
                    </p>
                  </div>
                </div>
                <div className="flex p-4 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <div>
                    <h2 className="text-[14px] text-gray-500 font-bold">
                      People
                    </h2>
                    <p className="text-[12px] text-gray-500">
                      Data of all People{" "}
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Motion Divs ends here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
