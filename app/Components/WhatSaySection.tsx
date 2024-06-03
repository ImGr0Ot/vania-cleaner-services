"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WhatSaySection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 720, min: 460 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div id="whatSay" className="bg-teal-700 mt-24 p-5">
        <h1 className="text-center text-3xl text-white font-bold mb-10 mt-5">
          What our customers say{" "}
        </h1>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="mb-10 mx-auto"
          containerClass="container"
          draggable
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm mx-7 h-[330px]">
            <div className="inline-flex items-center space-x-20">
              <div className="absolute w-16 h-16 rounded-full">
                <Image
                  fill
                  alt=""
                  src="/woman-perfil-photo-3.jpg"
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Steffany Wilson
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              &quot;The team was incredibly punctual and exceeded our
              expectations. They cleaned every nook and cranny, leaving our home
              sparkling clean. We are absolutely thrilled with their
              professionalism and attention to detail!&quot;
            </p>
            <Image
              src={"/stars_11906616.png"}
              alt={"5 stars picture"}
              width={100}
              height={100}
              className="object-cover absolute -bottom-8"
            />
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm mx-7 h-[330px]">
            <div className="inline-flex items-center space-x-20">
              <div className="absolute w-16 h-16 rounded-full">
                <Image
                  fill
                  alt=""
                  src="/woman-older-1.jpg"
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Sophia Johnson
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              &quot;What an amazing service! From the moment they arrived, the
              cleaners were courteous and efficient. They tackled tough stains
              and left our carpets looking brand new. We couldn&apos;t be
              happier with the results and will definitely be using their
              services again.&quot;
            </p>
            <Image
              src={"/stars_11906616.png"}
              alt={"5 stars picture"}
              width={100}
              height={100}
              className="object-cover absolute -bottom-8"
            />
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm mx-7 h-[330px]">
            <div className="inline-flex items-center space-x-20">
              <div className="absolute w-16 h-16 rounded-full">
                <Image
                  fill
                  alt=""
                  src="/perfil-hombre-2.jpg"
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Liam O&apos;Connor
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              &quot;I am so impressed with the quality of the cleaning provided.
              The staff was friendly and took great care to clean every part of
              our office space thoroughly. It&apos;s wonderful to walk into such
              a clean environment each day, thanks to their hard work.&quot;
            </p>
            <Image
              src={"/stars_11906616.png"}
              alt={"5 stars picture"}
              width={100}
              height={100}
              className="object-cover absolute -bottom-8"
            />
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm mx-7 h-[330px]">
            <div className="inline-flex items-center space-x-20">
              <div className="absolute w-16 h-16 rounded-full">
                <Image
                  fill
                  alt=""
                  src="/woman-perfil-1.jpg"
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Isabella Nguyen
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              &quot;We couldn&apos;t be happier with the cleaning service we
              received. The team was professional, friendly, and very
              detail-oriented. Our home looks better than ever, and we&apos;ve
              already scheduled our next cleaning. Highly recommend to anyone in
              need of quality cleaning services!&quot;
            </p>
            <Image
              src={"/stars_11906616.png"}
              alt={"5 stars picture"}
              width={100}
              height={100}
              className="object-cover absolute -bottom-8"
            />
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm mx-7 h-[330px]">
            <div className="inline-flex items-center space-x-20">
              <div className="absolute w-16 h-16 rounded-full">
                <Image
                  fill
                  alt=""
                  src="/woman-older-2.jpg"
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Alexandra Smith
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              &quot;From start to finish, the experience with this cleaning
              company was excellent. They communicated clearly, arrived on time,
              and did an outstanding job. Our kitchen and bathrooms have never
              looked so clean. We are very impressed and grateful for their hard
              work.&quot;
            </p>

            <Image
              src={"/stars_11906616.png"}
              alt={"5 stars picture"}
              width={100}
              height={100}
              className="object-cover absolute -bottom-8"
            />
          </blockquote>
        </Carousel>
      </div>
    </>
  );
};

export default WhatSaySection;
