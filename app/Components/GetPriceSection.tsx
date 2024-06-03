"use client";
import React, { useEffect } from "react";
import { BsHouseLock } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import Select from "react-select";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useState, useTransition } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const GetPriceSection = () => {
  const selectOptions = [
    { value: 0, label: "One time" },
    { value: 5, label: "Every 4 weeks (5%)" },
    { value: 10, label: "Every 3 weeks (10%)" },
    { value: 15, label: "Every 2 weeks (15%)" },
    { value: 20, label: "Weekly (20%)" },
  ];
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [showTextDeep, setShowTextDeep] = useState(false);
  const [total, setTotal] = useState(120);
  const [discount, setDiscount] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [type, setType] = useState("regular");
  const [isPending, startTransition] = useTransition();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Handlers para los inputs

  const handleSubmit = async () => {
    const phone = "15026841743";
    //const URL = `https://api.whatsapp.com/send?phone=${phone}&text=You%20have%20a%20client%20with%20number:%20${clientPhone}%20,%20${clientName}%20,%20house%20with%20${bedrooms}%20bedrooms%20,${bathrooms}%20bathrooms%20by%20a%20price%20of%20${total}%20usd%20with%20discount%20of%20${discount}%20percent%20and%20a%20date%20of%20${startDate}%20with%20zip%20${zipCode}.`;

    const message = `You have a client with number: ${clientPhone}, ${clientName}, house with ${bedrooms} bedrooms, ${bathrooms} bathrooms by a price of ${total} usd with discount of ${discount} and a date of ${startDate} with zip ${zipCode}.`;
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });
    if (response.ok) {
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }

    // window.open(URL, "_blank");
  };
  const handleTypeService = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "regular") {
      setType(e.target.name);
    } else {
      setType(e.target.name);
    }
  };
  useEffect(() => {
    const sumType = type === "regular" ? 0 : 50;
    const totalAux = 120 + bedrooms * 15 + bathrooms * 20 + sumType;
    setTotal(totalAux - (totalAux * discount) / 100);
  }, [bedrooms, bathrooms, discount, type]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", once: true }}
      >
        <h1
          id="getPrice"
          className=" text-center mx-10 lg:text-left text-3xl font-bold mt-32 lg:ml-28 text-teal-700 mb-10"
        >
          Get your price and book your cleaning today!
        </h1>
      </motion.div>
      <div className="bg-[#E7F6FC]">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 justify-between items-center  h-[1520px] lg:h-[790px] w-[95%] mx-auto transition-all duration-500">
          <div className="flex flex-col gap-5 h-[520px] w-3/4   mt-8 ml-5 duration-500 transition-all">
            <h2 className="text-left text-lg font-bold text-teal-700 mb-5">
              We have a fixed starting price (120 USD) that includes two
              bedrooms and one bathroom.You can add more bedrooms and bathrooms.
            </h2>
            <div className="inline-flex gap-2 text-teal-700 items-center text-semibold my-2">
              <BsHouseLock size={30} />-<p>2 Bedrooms, 1 Bathroom = 120 usd</p>
            </div>
            <div className="inline-flex gap-2 text-teal-700 items-center text-semibold">
              <FaBed size={30} />-{" "}
              <div
                className="flex justify-between items-center gap-5 w-1/4 ring-1 ring-slate-500  rounded-sm p-2 my-5
              min-w-[250px]"
              >
                <div>
                  <span>Add Bedrooms (+${bedrooms * 15}</span>)
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setBedrooms((prev) => (prev > 0 ? prev - 1 : 0));
                    }}
                  >
                    {"<"}
                  </button>
                  <span>{bedrooms}</span>
                  <button
                    onClick={() => {
                      setBedrooms((prev) => (prev < 8 ? prev + 1 : 8));
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-flex gap-2 text-teal-700 items-center text-semibold">
              <MdBathtub size={30} />-{" "}
              <div className="flex justify-between items-center gap-5 w-1/4 ring-1 ring-slate-500 rounded-sm p-2 my-5 min-w-[250px]">
                <div>
                  <span>Add Bathrooms (+${bathrooms * 20}</span>)
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setBathrooms((prev) => (prev > 0 ? prev - 1 : 0));
                    }}
                  >
                    {"<"}
                  </button>
                  <span>{bathrooms}</span>
                  <button
                    onClick={() => {
                      setBathrooms((prev) => (prev < 8 ? prev + 1 : 8));
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>

            <div className="inline-flex gap-2 text-teal-700 items-center text-semibold mt-3">
              <RiDiscountPercentFill size={30} className="text-teal-700" />-
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: "rgb(15 118 110)",
                    padding: "4px",
                  }),
                }}
                className="min-w-[250px] rounded-sm"
                placeholder="Select frecuency"
                id="selectDiscounts"
                options={selectOptions}
                onChange={(e) => {
                  setDiscount(e!.value);
                }}
              />
            </div>

            <div className="flex text-teal-700 items-center text-semibold my-3 gap-5">
              <div className="inline-flex gap-1 items-center text-semibold">
                <input
                  checked={type === "regular" ? true : false}
                  type="checkbox"
                  id="regularService"
                  name="regular"
                  onChange={handleTypeService}
                />
                <label>Regular Cleaning</label>
              </div>
              <div className="relative inline-flex gap-1 items-center text-semibold">
                <input
                  checked={type === "deep" ? true : false}
                  type="checkbox"
                  id="deepService"
                  name="deep"
                  onChange={handleTypeService}
                />
                <label
                  onMouseLeave={() => setShowTextDeep(false)}
                  onMouseOver={() => setShowTextDeep(true)}
                >
                  Deep Cleaning(+$50)
                </label>
                <div
                  className={`${
                    showTextDeep
                      ? "absolute -right-20 top-5 bg-white h-[60px] w-[240px] p-2 rounded-md"
                      : "hidden"
                  }`}
                >
                  Includes laundry and dry cleaning service.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[520px] w-3/4 lg:border-l-2 border-t-2 lg:border-t-0 border-teal-700 duration-300 gap-5 transition-all">
            <h1 className="text-left text-3xl font-bold text-teal-700 mb-5 ml-5 mt-3">
              Summary of the booking
            </h1>
            <div className="text-teal-700 font-semibold  ml-5 inline-flex items-center gap-2 w-full">
              <FaBed size={30} /> - Bedrooms:
              <span className="text-teal-700 font-semibold">
                {bedrooms + 2}
              </span>
            </div>
            <div className="text-teal-700 font-semibold  ml-5 inline-flex items-center gap-2 w-full">
              <MdBathtub size={30} />- Bathrooms:
              <span className="text-teal-700 font-semibold">
                {bathrooms + 1}
              </span>
            </div>
            <div className="text-teal-700 font-semibold  ml-5 inline-flex items-center gap-2">
              <RiDiscountPercentFill size={30} />- Discounts:
              <span className="text-teal-700 font-semibold">{discount}%</span>
            </div>
            <h1 className="text-left text-2xl font-bold text-red-500 mb-5 ml-5 mt-3">
              Total Price: ${total.toFixed(2)}
            </h1>
          </div>
          <div className="flex flex-col h-[520px] w-3/4   lg:border-l-2 border-t-2 lg:border-t-0 border-teal-700 m-8 duration-500 gap-5 transition-all">
            <h1 className="text-left text-3xl font-bold text-teal-700 mb-5 ml-5 mt-3">
              Information about you
            </h1>
            <form
              action={() => startTransition(handleSubmit)}
              className="flex flex-col justify-start gap-4 ml-5"
            >
              <input
                type="text"
                required
                onChange={(e) => setClientName(e.target.value)}
                minLength={6}
                maxLength={25}
                name="name"
                placeholder="Name"
                className="p-2 border-teal-700 border-b-2  outline-none  focus:border-teal-700  focus:border-2 rounded-md"
              />
              <input
                onChange={(e) => setClientPhone(e.target.value)}
                type="text"
                required
                minLength={10}
                maxLength={15}
                name="phoneNumber"
                placeholder="Phone number"
                className="p-2 border-teal-700 border-b-2  outline-none  focus:border-teal-700  focus:border-2  rounded-md"
              />
              <input
                type="text"
                onChange={(e) => setZipCode(e.target.value)}
                name="zipCode"
                minLength={5}
                maxLength={5}
                required
                placeholder="Zip Code"
                className="p-2 border-teal-700 border-b-2  outline-none  focus:border-teal-700  focus:border-2  rounded-md"
              />

              <div className="flex flex-col text-teal-700 ml-2 justify-start gap-4 font-semibold">
                <h1>Select date & time</h1>
                <div className="flex gap-2 items-center">
                  <FaCalendarCheck size={20} />-{" "}
                  <DatePicker
                    className="rounded-md border-teal-700 border-b-2 outline-none focus:border-teal-700 focus:border-2 p-2 "
                    selected={startDate}
                    showTimeSelect
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MMMM d, yyyy - h:mm aa"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, x: 15 }}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <button
                    type="submit"
                    className="mt-5 bg-teal-700 rounded-lg p-2 text-white min-w-[100px]"
                  >
                    {isPending ? "Submitting..." : "Submit"}
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPriceSection;
