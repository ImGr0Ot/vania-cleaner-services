import React from "react";
import Image from "next/image";
const AuxFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start justify-center bg-white text-teal-800 gap-3 mt-5 mb-2 lg:ml-36 ml-5">
      <Image
        src={"/vanias-cleaning-services-high-resolution-logo-transparent.png"}
        alt={"Logo of company in footer"}
        width={300}
        height={300}
        className="object-contain filter invert-[30%]"
      ></Image>
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm font-semibold">
          &copy; 2024. Vania&apos;Cleaning Services. All rights reserved.
        </p>
        <p className="text-sm font-semibold">
          Powered by{" "}
          <span className="text-gray-400">Anthony&apos;s Marketing</span>
        </p>
      </div>
    </div>
  );
};

export default AuxFooter;
