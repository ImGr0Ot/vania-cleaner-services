"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhyUsSection = () => {
  return (
    <>
      <h1
        id="whyUs"
        className="mt-20 font-bold text-center text-3xl text-teal-800"
      >
        Why choose us?
      </h1>

      <section>
        <div className="mx-auto max-w-screen-xl w-[90%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="relative h-64 overflow-hidden rounded-md sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt="photo say no"
                  src="/No.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  We will never say no.
                </h2>

                <p className="my-4 text-gray-500">
                  We will always be at the complete disposal of our
                  customers&apos; needs. Did you request the service for less
                  than 24 hours? Do you need a cleaning in a tight time frame?
                  We take care of it with no hassle and no commissions...
                </p>

                <motion.div
                  whileHover={{ scale: 1.1, x: 25 }}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <a
                    className="rounded-md px-5 py-2.5 text-sm font-medium bg-teal-600 text-gray-50 duration-500"
                    href="#getPrice"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="my-8 border-[#6fb7a8] w-[50%] mx-auto" />
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 w-[90%]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Don&apos;t worry about money
                </h2>

                <p className="my-4 text-gray-500">
                  We take great care to establish a relationship of trust with
                  our clients and to keep them coming back to us, as evidenced
                  by the discounts we offer from the second time you hire us,
                  the fact that you only pay when you are satisfied with our
                  service, and the fact that our rates are affordable with zero
                  fees.
                </p>

                <motion.div
                  whileHover={{ scale: 1.1, x: 25 }}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <a
                    className="rounded-md px-5 py-2.5 text-sm font-medium bg-teal-600 text-gray-50 duration-500"
                    href="#getPrice"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="relative h-64 overflow-hidden rounded-md sm:h-80 order-first lg:h-full">
                <Image
                  alt="photo of cleaning services"
                  src="/Dont-wprry-about-money.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="my-8 border-[#6fb7a8] w-[50%] mx-auto" />
      </section>
      <section>
        <div className=" w-[90%] mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="relative h-64 overflow-hidden rounded-md sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt="Image of man cleaning"
                  src="/photo-man-cleaning.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  More than just professionals
                </h2>

                <p className="my-4 text-gray-500">
                  We know that no matter how good we are, there is always room
                  for improvement by listening to our customers. That&apos;s why
                  we ask questions like What didn&apos;t you like? What would
                  you like us to do differently? What should we improve?
                </p>

                <motion.div
                  whileHover={{ scale: 1.1, x: 25 }}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <a
                    className="rounded-md px-5 py-2.5 text-sm font-medium bg-teal-600 text-gray-50 duration-500"
                    href="#getPrice"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSection;
