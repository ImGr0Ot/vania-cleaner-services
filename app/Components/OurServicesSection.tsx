"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const OurServicesSection = () => {
  const variants1 = {
    initial: { opacity: 0, x: -200 },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const variants2 = {
    initial: { opacity: 0, x: 200 },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const [showtext, setShowtext] = useState(false);
  const [numberPhoto, setNumberPhoto] = useState(0);
  const showtextHandler = (i: number) => {
    setNumberPhoto(i);
    setShowtext(true);
  };
  return (
    <>
      <h1
        id="ourServices"
        className="text-3xl font-bold text-center sm:mt-44 mt-48 text-teal-800"
      >
        Types of services
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-[85%] mx-auto">
        <div
          onMouseOver={() => showtextHandler(1)}
          onMouseLeave={() => showtextHandler(0)}
          className="relative h-[400px]"
        >
          <Image
            src={"/durty-close.jpg"}
            alt={"photo for regular cleaning"}
            fill
            className="object-cover rounded-md hover:brightness-50 duration-700"
          />

          <motion.div
            initial="initial"
            animate={showtext && numberPhoto === 1 ? "animate" : "initial"}
            variants={variants1}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className="absolute flex flex-col items-start w-1/2 mt-10">
              <h1 className="text-2xl font-semibold mt-100 mx-5 text-gray-200">
                Regular Cleaning
              </h1>
              <p className="mx-5 text-lg text-gray-200 mt-5">
                Do you prefer to wash your own sheets and clothes? Then this is
                the service for you. We cover all aspects of cleaning and
                organization except washing and folding clothes and sheets.
              </p>
            </div>
          </motion.div>
        </div>
        <div
          onMouseOver={() => showtextHandler(2)}
          onMouseLeave={() => showtextHandler(0)}
          className="relative h-[400px]"
        >
          <Image
            src={"/house-cleaned.webp"}
            alt={"photo for regular cleaning"}
            fill
            className="object-cover rounded-md hover:brightness-50 duration-700"
          />

          <motion.div
            initial="initial"
            animate={showtext && numberPhoto === 2 ? "animate" : "initial"}
            variants={variants2}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className="absolute flex flex-col items-start w-1/2 mt-10">
              <h1 className="text-2xl font-semibold mt-100 mx-5 text-gray-200">
                Deep Cleaning
              </h1>
              <p className="mx-5 text-lg text-gray-200 mt-5">
                Nothing is spared, our excellent service leaves absolutely clean
                and tidy, we wash and fold both bed linen and personal clothing,
                if we cannot do it at your home...
              </p>
            </div>
          </motion.div>
        </div>
        <div
          onMouseOver={() => showtextHandler(3)}
          onMouseLeave={() => showtextHandler(0)}
          className="relative h-[400px]"
        >
          <Image
            src={"/woman-Cleaning.webp"}
            alt={"photo for regular cleaning"}
            fill
            className="object-cover rounded-md hover:brightness-50 duration-700"
          />

          <motion.div
            initial="initial"
            animate={showtext && numberPhoto === 3 ? "animate" : "initial"}
            variants={variants1}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className="absolute flex flex-col items-start w-1/2 mt-10">
              <h1 className="text-2xl font-semibold mt-100 mx-5 text-gray-200">
                Office Cleaning
              </h1>
              <p className="mx-5 text-lg text-gray-200 mt-5">
                Let us take care of the cleaning so you can focus on growing
                your business and achieving success. Let us provide you with a
                fresh, clean environment to work.
              </p>
            </div>
          </motion.div>
        </div>
        <div
          onMouseOver={() => showtextHandler(4)}
          onMouseLeave={() => showtextHandler(0)}
          className="relative h-[400px]"
        >
          <Image
            src={"/emptyHouse.jpg"}
            alt={"photo for regular cleaning"}
            fill
            className="object-cover rounded-md hover:brightness-50 duration-700"
          />

          <motion.div
            initial="initial"
            animate={showtext && numberPhoto === 4 ? "animate" : "initial"}
            variants={variants2}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className="absolute flex flex-col items-start w-1/2 mt-10">
              <h1 className="text-2xl font-semibold mt-100 mx-5 text-gray-200">
                Moving Cleaning
              </h1>
              <p className="mx-5 text-lg text-gray-200 mt-5">
                Are you moving and need help with the cleaning? We can even help
                you with the organization, whether you need it in your new home
                or in your old one, we are there for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurServicesSection;
