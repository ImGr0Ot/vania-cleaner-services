"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdCloseFullscreen } from "react-icons/md";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", once: true }}
            >
              <a href="/">
                <Image
                  src={
                    "/vanias-cleaning-services-high-resolution-logo-transparent.png"
                  }
                  width={300}
                  height={160}
                  alt={"Vania Cleaning Services Logo"} // This is the alt text for the image
                ></Image>
              </a>
            </motion.div>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden lg:flex">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.0,
                  type: "spring",
                  delay: 0.5,
                  once: true,
                }}
              >
                <ul className="flex items-center gap-6 text-md">
                  <li className="navBarLi">
                    <a className="navBarLiA" href="#ourServices">
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li className="navBarLi">
                    <a className="navBarLiA" href="#contactUs">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li className="navBarLi">
                    <a className="navBarLiA" href="#faq">
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>

                  <li className="navBarLi">
                    <a className="navBarLiA" href="#aboutUs">
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                </ul>
              </motion.div>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex">
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring", once: true }}
                >
                  <a
                    className="hidden sm:flex rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-gray-50 duration-500"
                    href="sms:+15026841743"
                  >
                    Text Us (502) 684-1743
                  </a>
                </motion.div>
              </div>

              <div className="block lg:hidden">
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring", once: true }}
                >
                  <button
                    onClick={handleNav}
                    className="rounded bg-gray-100 p-2 text-teal-600 hover:bg-teal-600 hover:text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
              <div
                className={
                  menuOpen
                    ? "fixed lg:hidden right-8 top-16 rounded-lg shadow-xl w-[180px] duration-500 mx-12 sm:mx-28 z-20"
                    : "fixed left-[-100%]"
                }
              >
                <div className="rounded-md p-2 bg-white">
                  <div className="flex flex-col items-end">
                    <MdCloseFullscreen
                      onClick={handleNav}
                      size={20}
                      className="hover:size-[25px] text-teal-600 hover:scale-110 duration-200 cursor-pointer"
                    />
                  </div>
                  <ul className="flex flex-col items-center gap-4 text-md">
                    <li className="navBarLi">
                      <a className="navBarLiA" href="#ourServices">
                        {" "}
                        Services{" "}
                      </a>
                    </li>

                    <li className="navBarLi">
                      <a className="navBarLiA" href="#contactUs">
                        {" "}
                        Contact{" "}
                      </a>
                    </li>

                    <li className="navBarLi">
                      <a className="navBarLiA" href="#faq">
                        {" "}
                        FAQ{" "}
                      </a>
                    </li>

                    <li className="navBarLi">
                      <a className="navBarLiA" href="#aboutUs">
                        {" "}
                        About Us{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
