import React from 'react';
import { motion } from 'framer-motion';
import financialImage from '../assets/moneyTree.png';

const Financials = () => {
   return (
       <div className="my-10 mx-auto container max-w-screen-lg px-6">
           <div className="flex flex-col lg:flex-row">
               <div className="flex-1 bg-custom-dark rounded-xl py-8 px-6 my-4">
                   <h1 className="text-white font-bold my-2 text-2xl lg:text-4xl md:text-3xl sm:text-xl">
                       Make Money, Risk-Free
                   </h1>
                   <p className="text-white my-2">
                       You pay for fulfillment only when you make a sale
                   </p>
                   <div className="my-4 bg-custom-darker rounded-lg px-2 py-4">
                       <div className="flex justify-between">
                           <p className="text-white my-2 mx-2">You sell a t-shirt</p>
                           <p className="text-white my-2 mx-2">$30</p>
                       </div>
                       <div className="flex justify-between mb-2">
                           <p className="text-white my-2 mx-2">You pay for its production</p>
                           <p className="text-white my-2 mx-2">$12</p>
                       </div>
                       <div className="border-b border-white w-full h-0 mr-2 px-2"></div>
                       <div className="flex justify-between">
                           <h4 className="text-green-500 text-lg font-bold mx-2 my-2">Your profit</h4>
                           <h5 className="text-green-500 text-lg font-bold mx-2 my-2">$18</h5>
                       </div>
                   </div>
                   <button className="bg-green-600 text-white my-4 px-4 py-1 rounded-md text-base hover:bg-green-700 transition-colors duration-300 font-serif">
                       Start selling
                   </button>
                   <p className="text-neutral-200 text-sm my-3">
                       100% Free to use · 900+ Products · Largest print network
                   </p>
               </div>
               <motion.div
                   className="hidden lg:block flex-1 rounded-xl overflow-hidden my-4"
                   initial={{ opacity: 0, x: 100 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
               >
                   <img src={financialImage} alt="Financial Illustration" className="h-full w-full object-cover rounded-xl" />
               </motion.div>
           </div>
       </div>
   );
};

export default Financials;
