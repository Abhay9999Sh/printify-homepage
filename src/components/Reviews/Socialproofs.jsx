import { useState } from "react";
import reviews from "./reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Socialproofs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="container my-40 mx-auto px-6 py-10 flex flex-col overflow-hidden">
            <div className="flex flex-col lg:flex-row my-10">
                <h1 className="text-neutral-800 text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mx-4 mb-3 text-left md:mx-0">
                    Trusted by over 8M sellers around the world
                </h1>
                <p className="text-gray-700 mx-4 lg:w-2/3 text-left">
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </p>
            </div>
            <div className="relative flex items-center justify-center">
                <button
                    onClick={prevReview}
                    className="absolute left-4 z-10 p-3 bg-blue-300 rounded-full hover:bg-gray-300 transition-transform duration-300 ease-in-out"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="flex gap-6 mx-auto">
                    {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                        <div key={index} className="card relative w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-8 text-center transition-transform duration-300">
                            <div className="text-yellow-500 mb-4 flex justify-center">
                                {[...Array(review.stars)].map((_, starIndex) => (
                                    <FontAwesomeIcon icon={faStar} key={starIndex} className="mx-1" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-4">"{review.feedback}"</p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-1">
                                    <img
                                        src={review.photo}
                                        alt={review.name}
                                        className="rounded-full object-cover shadow-md"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">{review.name}</h3>
                                <span className="text-sm text-gray-500">{review.designation}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={nextReview}
                    className="absolute right-4 z-10 p-3 bg-blue-300 rounded-full hover:bg-gray-300 transition-transform duration-300 ease-in-out"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default Socialproofs;
