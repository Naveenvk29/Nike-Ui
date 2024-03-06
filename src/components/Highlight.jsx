import React from "react";

const Highlight = ({ endpoint: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div className=" w-full h-auto  p-24 flex sm:flex-col-reverse justify-around gap-8 ">
        <div className="w-[45vw] flex  items-center ">
          <img className="rotate-[15deg]" src={img} alt="" />
        </div>
        <div className="w-[40vw]">
          <h1 className="text-6xl md:text-3xl lg:text-5xl font-bold text-sky-600">
            {heading}
          </h1>
          <h1 className="mt-4 text-3xl lg:text-2xl sm:text-xl  font-semibold">
            {title}
          </h1>
          <p className="text-md mt-6 text-gray-800">{text}</p>
          <div
            className="mt-8 ml-16 sm:ml-0 md:ml-0
          "
          >
            <a
              className="border  bg-sky-600  text-slate-100  hover:text-slate-100 hover:bg-gray-600 text-xl px-3 py-1 rounded-lg shadow-2xl shadow-gray-900           "
              href={url}
              target="_blank"
            >
              {btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
