"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="relative h-[600px] w-full">
          <Image
            className="object-cover filter saturate-150 brightness-[0.5]"
            src="/wallpaperWomanCleaning.jpg"
            alt="hero"
            fill
          />

          <div className="absolute top-[50%] left-[40%]">
            <h1 className="text-white text-5xl font-bold">
              Professional Cleaning
            </h1>

            <h2 className="text-white text-3xl font-bold mb-5">
              We clean your home...
            </h2>
            <motion.div
              whileHover={{ scale: 1.1, x: 25 }}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-gray-50 duration-500"
                href="#getPrice"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
      >
        <ul className=" bg-teal-700 h-[100px] flex items-center gap-5 justify-around text-white font-semibold text-lg px-10">
          <li>Choose when, what and how we clean</li>
          <li>Offer discounts on recurring cleanings</li>
        </ul>
      </motion.div>
    </>
  );
};

export default Hero;
