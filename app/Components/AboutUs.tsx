import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
//import Map from "./Map";
const AboutUs = () => {
  return (
    <div className="p-2 mt-10 text-teal-800 w-[95%] mx-auto">
      <h1
        id="aboutUs"
        className="font-hero text-center font-bold text-4xl  mt-10 duration-500 text-teal-800"
      >
        {" "}
        About Us
      </h1>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-5">
        <div className="flex flex-col gap-5 w-full xl:w-1/2 ">
          <h1 className="font-bold font-hero text-center text-2xl mt-12 duration-500">
            {" "}
            Vania&apos;s Cleaning Services.{" "}
          </h1>
          <p className="font-candara text-center mt-3 mx-2 text-xl md:mx-18 duration-500">
            Founded in 2024, Vania&apos;s Cleaning Services is a dedicated
            cleaning team committed to providing exceptional cleaning services
            to homes and businesses alike. Our company prides itself on bringing
            together a diverse team with members from Cuba who bring their
            unique skills and perspectives to ensure we deliver top-notch
            cleaning solutions. At Vania&apos;s Cleaning Services, our mission
            is to create clean, healthy and inviting spaces for our clients. We
            believe that a clean environment is essential to wellness and
            productivity, and we strive to make it a reality.
          </p>
          {/*<div className="flex gap-10 mx-auto">
            <FaFacebook color="#5F9EA0" size={30} />
            <AiFillTwitterCircle color="#5F9EA0" size={30} />
            <FaTelegram color="#5F9EA0" size={30} />
            <AiFillInstagram color="#5F9EA0" size={30} />
          </div>*/}
        </div>
        <div className="flex justify-center w-full mx-16 mt-10 xl:w-1/2 xl:mt-16 xl:mx-12 duration-500">
          <iframe
            className="w-[90%] h-[250px] border-0 rounded-md shadow-lg xl:w-[600px] xl:h-[400px]"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              process.env.NEXT_PUBLIC_MAP_API_KEY as string
            }&q=38.166160583496094,-85.66651153564453&zoom=13`}
            allowFullScreen
          ></iframe>
          {/*<Map />*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
