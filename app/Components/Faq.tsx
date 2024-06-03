"use client";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { exit } from "process";
const Faq = () => {
  const variants1 = {
    initial: { opacity: 0, x: -200 },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: { opacity: 0, x: -200 },
  };
  const [showtext1, setShowtext1] = useState(false);
  const [showtext2, setShowtext2] = useState(false);
  const [showtext3, setShowtext3] = useState(false);
  const [showtext4, setShowtext4] = useState(false);
  const [showtext5, setShowtext5] = useState(false);
  const [showtext6, setShowtext6] = useState(false);
  const [showtext7, setShowtext7] = useState(false);
  const [showtext8, setShowtext8] = useState(false);
  const [showtext9, setShowtext9] = useState(false);
  const [showtext10, setShowtext10] = useState(false);
  const [showtext11, setShowtext11] = useState(false);
  const [showtext12, setShowtext12] = useState(false);
  const [showtext13, setShowtext13] = useState(false);

  return (
    <div className="space-y-8 mt-32 w-[85%] mx-auto">
      <h1 id="faq" className="text-3xl font-bold text-teal-800 text-center">
        Frequent Asked Questions
      </h1>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext1(!showtext1)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What areas do you serve?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext1 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            We provide cleaning services throughout Louisville and the
            surrounding areas. If you&apos;re unsure whether we service your
            location, please contact us directly.
          </p>
        </motion.div>
      </details>

      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext2(!showtext2)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What types of cleaning services do you offer?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext2 ? "animate" : "initial"}
          variants={variants1}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            We offer a variety of cleaning services including residential
            cleaning, commercial cleaning, deep cleaning and move-in/move-out
            cleaning.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext3(!showtext3)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            How do I book a cleaning service?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext3 ? "animate" : "initial"}
          variants={variants1}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            You can book a cleaning service through our website by filling out
            the booking form, or you can call us directly at{" "}
            <a className="hover:text-gray-500" href=":+15026841743">
              5026841743
            </a>
            . We also accept bookings via email at{" "}
            <a
              className="hover:text-gray-500"
              href="mailto:vaniaurgelles310@gmail.com"
            >
              vaniaurgelles310@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext4(!showtext4)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            How much do your cleaning services cost?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext4 ? "animate" : "initial"}
          variants={variants1}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Our pricing varies based on the type and size of the cleaning
            job.You can get an approximate price in our calculator or contact us
            for a free estimate tailored to your specific needs.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext5(!showtext5)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What forms of payment do you accept?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext5 ? "animate" : "initial"}
          variants={variants1}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            We accept various forms of payment including cash, checks, zelle and
            Paypal. We always receive payment after the service has been
            performed.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext6(!showtext6)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            Can I request the service without scheduling an appointment first?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext6 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Yes, the purpose of the appointment is to clarify the details before
            the service is performed, in case you schedule the service, our team
            will contact you 24 hours before.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext7(!showtext7)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What is the difference between deep cleaning and regular cleaning?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext7 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            The difference between the deep cleaning and the regular cleaning is
            that in the regular cleaning we do not take care of the washing and
            folding of personal and bed linen. We categorize these services
            taking into account that there are clients who prefer to wash their
            own clothes.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext8(!showtext8)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            Do I need to be home during the cleaning?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext8 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            No, you do not need to be home during the cleaning. Many of our
            clients provide us with a key or access code. Rest assured, our team
            is trustworthy and professional.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext9(!showtext9)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            Can I customize my cleaning service?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext9 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Of course, we will contact you within 24 hours before the cleaning
            to confirm the service and adjust the details, here you can specify
            what you want. You can always call or text us at any time of the day
            or night.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext10(!showtext10)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What if I&apos;m not satisfied with the cleaning?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext10 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Customer satisfaction is our top priority. If you&apos;re not
            satisfied with the service, please contact us and we will re-clean
            the area at no additional charge.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext11(!showtext11)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            Are you cleaning services teams authorized to work in the United
            States?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext11 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Yes. We verify that employees are authorized to work in the United
            States. All of our employees must fill out an I-9, the employment
            eligibility verification form and provide necessary eligibility
            documents, before starting work.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext12(!showtext12)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            Is there a cancellation fee?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext12 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            We understand that plans can change. If you need to cancel or
            reschedule your appointment, please do so at least 24 hours in
            advance to avoid any cancellation fees.
          </p>
        </motion.div>
      </details>
      <details className="group border-s-4 border-teal-500 bg-[#E7F6FC] p-6 rounded-sm">
        <summary
          onClick={() => setShowtext13(!showtext13)}
          className="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 className="text-lg font-medium text-gray-700">
            What are your hours of operation?
          </h2>

          <div className="rounded-full bg-white text-gray-900 p-3">
            <FiPlus size={20} className="duration-500 group-open:rotate-45" />
          </div>
        </summary>

        <motion.div
          initial="initial"
          animate={showtext13 ? "animate" : "initial"}
          variants={variants1}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="mt-4 leading-relaxed text-gray-700">
            Our working hours are Monday through Friday from 8:00 am to 6:00 pm,
            and on weekends we work until 3:00 pm.
          </p>
        </motion.div>
      </details>
    </div>
  );
};

export default Faq;
