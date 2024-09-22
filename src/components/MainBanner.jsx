import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import bannerImg1 from '../assets/banner/bannerImg1.png';
import bannerImg2 from '../assets/banner/bannerImg2.png';
import bannerImg3 from '../assets/banner/bannerImg3.png';
import bannerImg4 from '../assets/banner/bannerImg4.png';
import { motion } from 'framer-motion';

const MainBanner = () => {
    const headingText = "Create and sell custom products";

    const letterAnimation = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="my-8 container px-6 mx-auto py-10 bg-gradient-to-r from-blue-100 to-green-100 flex flex-col lg:flex-row items-center rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
        >
            <motion.div
                className="main-wrapper flex-col lg:w-1/2"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-left">
                    {headingText.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            variants={letterAnimation}
                            className={`inline-block ${index < 3 ? 'text-green-600' : 'text-black'}`}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </h1>
                <ul className="flex flex-col space-y-4 mt-4">
                    {['100% Free to use', '900+ High-Quality Products', 'Largest global print network'].map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="navigation mt-8 mb-4">
                    <motion.button
                        className="px-4 py-2 border border-black bg-green-600 text-white mr-4 rounded-md hover:bg-green-700 transition-all duration-300"
                    >
                        Start for free
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 bg-white hover:text-green-600 mt-4 mr-4 border border-black rounded-md transition-all duration-300"
                    >
                        How to use
                    </motion.button>
                </div>
                <p className='text-green-600 font-semibold mb-8'>
                    Trusted by over 8M sellers around the world
                </p>
            </motion.div>

            <motion.div
                className="lg:w-1/2 grid grid-cols-2 gap-4 items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.2,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[bannerImg1, bannerImg2, bannerImg3, bannerImg4].map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-100"
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MainBanner;
