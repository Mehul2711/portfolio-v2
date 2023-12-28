import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../public/img/loader.gif";
const PreLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="text-4xl font-bold text-center mb-3 ">
        Loading<span className="loader-dots">...</span>
      </div>
      <div>
        <Image
          src={Loader}
          alt="loader"
          width={500}
          height={500}
          className="flex items-center"
        />
      </div>
    </div>
  );
};

export default PreLoader;
