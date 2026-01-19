import React from "react";
import { motion } from "motion/react";

export default function HoverExitAnimation() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-white flex flex-col h-5/6 w-72 shadow-2xl rounded-2xl ">
        <h2 className="text-[14px] font-bold text-start ms-4  mt-4 pt-1 text-gray-500">
          Lorem, ipsum dolor.
        </h2>
        <p className="text-start text-[14px] ms-4  mt-4  pt-1 text-gray-500">
          Lorem ipsum vitae illo doloremque sint facilis officia?
        </p>
        <div className="flex items-center justify-center">
          <button className="py-2 text-[12px]  shadow-2xl px-3 flex gap-1 rounded-lg mt-2 text-center">
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
          <div className="h-full w-full rounded border absolute bg-gray-100 divide-y ">
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
                  Aceternity UI Components
                </h2>
                <p className="text-[12px] text-gray-500">
                  A collection of UI Components
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <div>
                <h2 className="text-[14px] text-gray-500 font-bold">
                  Aceternity UI Components
                </h2>
                <p className="text-[12px] text-gray-500">
                  A collection of UI Components
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <div>
                <h2 className="text-[14px] text-gray-500 font-bold">
                  Aceternity UI Components
                </h2>
                <p className="text-[12px] text-gray-500">
                  A collection of UI Components
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <div>
                <h2 className="text-[14px] text-gray-500 font-bold">
                  Aceternity UI Components
                </h2>
                <p className="text-[12px] text-gray-500">
                  A collection of UI Components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
