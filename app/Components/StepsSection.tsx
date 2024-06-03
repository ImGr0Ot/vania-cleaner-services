"use client";
import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const StepsSection = () => {
  return (
    <>
      <div className="flex flex-col w-[45%] max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-xl text-teal-700 font-semibold text-left mt-10  ml-5">
            {" "}
            You can{" "}
            <a
              href="sms:+15026841743"
              className="font-bold  text-teal-700 hover:bg-teal-700 hover:text-white rounded-md cursor-pointer transition-all duration-300 p-1"
            >
              text to us
            </a>
          </h1>
        </motion.div>
        <h1 className="text-xl text-teal-600 font-semibold text-center">or</h1>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-xl text-teal-700 font-semibold text-right mb-5">
            {" "}
            Request{" "}
            <a
              href="#getPrice"
              className="font-bold  text-teal-700 hover:bg-teal-700 hover:text-white rounded-md cursor-pointer transition-all duration-300 p-1"
            >
              our services.
            </a>
          </h1>
        </motion.div>
      </div>
      <div className="relative max-w-screen-xl lg:block lg:space-x-3 h-[1200px] lg:h-[400px] w-[80%] lg:w-[90%] bg-[#E7F6FC] rounded-md mx-auto mt-10 space-y-3">
        <h1 className="text-2xl text-teal-800 font-semibold text-center pt-8">
          How you can request
        </h1>

        <div className="absolute h-[300px] lg:h-[350px] w-[80%] lg:w-1/4 top-[10%] lg:top-[15%] left-[10%] lg:left-[2%] bg-white rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-center mx-10">
            <RiMoneyDollarCircleFill
              size={60}
              className="text-teal-600 items-center justify-center mx-auto mt-8"
            />
            <h1 className="text-xl text-teal-600 font-semibold text-center mt-5">
              Request an estimate
            </h1>
            <p className="text-md text-gray-500 font-semibold text-center mt-5">
              Give us some information about you, what you want to clean, our
              calculator tool will give you an approximate price.
            </p>
          </div>
        </div>
        <MdOutlineKeyboardDoubleArrowDown
          size={60}
          className="absolute top-[41%] left-[43%] text-teal-600 lg:hidden"
        />
        <MdOutlineKeyboardDoubleArrowRight
          size={60}
          className="hidden lg:flex absolute top-[45%] left-[29%] text-teal-600"
        />
        <div className="absolute h-[300px] lg:h-[350px] w-[80%] lg:w-1/4 top-[48%] lg:top-[15%] left-[10%] lg:left-[36%] bg-white rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-center mx-10">
            <IoCalendar
              size={60}
              className="text-teal-600 items-center justify-center mx-auto mt-8"
            />
            <h1 className="text-xl text-teal-600 font-semibold text-center mt-5">
              Book it
            </h1>
            <p className="text-md text-gray-500 font-semibold text-center mt-5">
              Choose a date and time, to schedule an appointment or a service,
              as you wish.
            </p>
          </div>
        </div>
        <MdOutlineKeyboardDoubleArrowDown
          size={60}
          className="absolute top-[78%] left-[43%] text-teal-600 lg:hidden"
        />
        <MdOutlineKeyboardDoubleArrowRight
          size={60}
          className="hidden lg:flex absolute top-[45%] left-[63%] text-teal-600"
        />
        <div className="absolute h-[300px] lg:h-[350px] w-[80%] lg:w-1/4 top-[85%] lg:top-[15%] left-[10%] lg:left-[71%] bg-white rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-center mx-10">
            <IoCheckmarkDoneCircle
              size={60}
              className="text-teal-600 items-center justify-center mx-auto mt-8"
            />
            <h1 className="text-xl text-teal-600 font-semibold text-center mt-5">
              We are all set
            </h1>
            <p className="text-md text-gray-500 font-semibold text-center mt-5">
              All that&apos;s left to do is clean, so relax.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsSection;
