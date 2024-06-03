"use client";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSms } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import AuxFooter from "./AuxFooter";

const Footer = () => {
  return (
    <>
      <footer className="bg-teal-700 text-white mt-20 ">
        <div className="mx-auto w-[90%] max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="flex items-start flex-col justify-center gap-4">
            <h1 id="contactUs" className="text-3xl font-bold">
              Contact us
            </h1>
            <div className="inline-flex gap-4 items-center">
              <MdOutlineEmail size={20} className="text-gray-200" />
              <Link
                href="mailto:vaniaurgelles310@gmail.com"
                className="text-gray-200 hover:text-gray-300"
              >
                {" "}
                vaniaurgelles310@gmail.com
              </Link>
            </div>
            <div className="inline-flex gap-4 items-center">
              <MdOutlineSms size={20} className="text-gray-200" />
              <Link
                href="sms:+1(502)684-1743"
                className="text-gray-200 hover:text-gray-300"
              >
                {" "}
                +1 (502) 684-1743
              </Link>
            </div>
            <div className="inline-flex gap-4 items-center">
              <BsHouse size={20} className="text-gray-200" />
              <Link
                href="https://www.google.com/maps/place/5209+Russett+Blvd,+Louisville,+KY+40218/@38.1658892,-85.6691327,17z/data=!3m1!4b1!4m6!3m5!1s0x88690be9ad5d3a19:0x29a19c7265a6c3c2!8m2!3d38.1658892!4d-85.6665524!16s%2Fg%2F11c2h5cfm9?entry=ttu"
                className="text-gray-200 hover:text-gray-300"
              >
                {" "}
                Our Office
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 border-t border-gray-100 pt-8  lg:grid-cols-4 lg:pt-16">
            <div>
              <p className="font-semibold text-xl">Services</p>

              <ul className="mt-6 space-y-4 text-md">
                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#ourServices"}
                  >
                    Regular Cleaning
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#ourServices"}
                  >
                    Deep Cleaning
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#ourServices"}
                  >
                    Move In/Out Cleaning
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#ourServices"}
                  >
                    Office Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-xl">Company</p>

              <ul className="mt-6 space-y-4 text-md">
                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#whyUs"}
                  >
                    Why us
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#aboutUs"}
                  >
                    About us
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#whatSay"}
                  >
                    Customers Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-xl">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-md">
                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#contactUs"}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className=" transition hover:opacity-75 cursor-pointer"
                    href={"#faq"}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-xl">Legal</p>

              <ul className="mt-6 space-y-4 text-md">
                <li>
                  <Link
                    //{onClick={() => scrolltoHash("whyUsSection")}}
                    className="transition hover:opacity-75 cursor-pointer"
                    href={"/privacyPolicy"}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <AuxFooter />
    </>
  );
};

export default Footer;
