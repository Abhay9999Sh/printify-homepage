import React, { useEffect, useState } from 'react';
import processImg1 from "../assets/process/processImg1.png";
import processImg2 from "../assets/process/processImg2.png";
import processImg3 from "../assets/process/processImg3.png";
import mainImage from "../assets/heroImg.png";
import { motion } from "framer-motion";

const Process = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    setHasScrolled(true);
    window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        className="container px-6 mx-auto py-20 flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg justify-between h-auto lg:h-screen"
        initial="hidden"
        animate={hasScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={slideInFromRight}
      >
        <div className="text-section w-full lg:w-1/2 flex flex-col justify-center lg:pr-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Create, Print, Wear
          </h1>
          <p className="text-gray-700 text-lg mt-4 mb-16">
            Customize your products with ease. Print your designs with the highest quality and wear your creations proudly.
          </p>
        </div>
        <div className="image-section w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={mainImage}
            alt="Main Feature"
            className="h-auto max-h-96 lg:max-h-screen w-auto object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="container process px-6 mx-auto py-20 flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg space-y-10 lg:space-y-0 lg:space-x-6"
        initial="hidden"
        animate={hasScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={slideInFromRight}
      >
        <div className="process1 mx-2 my-6 text-center lg:text-left flex-1 flex flex-col items-center lg:items-start">
          <img src={processImg1} alt="process" className="h-24 w-24 mx-auto lg:mx-0" />
          <h1 className="my-4 text-xl lg:text-2xl font-bold text-green-500 uppercase">
            CREATE
            <span className="text-black"> custom products</span>
          </h1>
          <p className="text-gray-700 text-sm">
            Easily add your designs to a wide range of products using our free tools.
          </p>
        </div>
        <div className="process2 mx-2 my-6 text-center lg:text-left flex-1 flex flex-col items-center lg:items-start">
          <img src={processImg2} alt="process" className="h-24 w-24 mx-auto lg:mx-0" />
          <h1 className="my-4 text-xl lg:text-2xl font-bold text-green-500 uppercase">
            SELL
            <span className="text-black"> on your terms</span>
          </h1>
          <p className="text-gray-700 text-sm">
            You choose the products, sale price, and where to sell.
          </p>
        </div>
        <div className="process3 mx-2 my-6 text-center lg:text-left flex-1 flex flex-col items-center lg:items-start">
          <img src={processImg3} alt="process" className="h-24 w-24 mx-auto lg:mx-0" />
          <h1 className="my-4 text-xl lg:text-2xl font-bold text-green-500 uppercase">
            We
            <span className="text-black"> handle the fulfillment</span>
          </h1>
          <p className="text-gray-700 text-sm">
            Once an order is placed, we automatically handle all the printing and delivery logistics.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Process;
