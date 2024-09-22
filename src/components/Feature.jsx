import image1 from "../assets/features/image1.png";
import image2 from "../assets/features/image2.png";
import image3 from "../assets/features/image3.png";

const Feature = () => {
    return (
        <div className="my-8 features container px-6 mx-auto py-40 flex flex-row items-center">
            <div className="feature1 mr-3 my-4">
                <img src={image1} alt="Higher Profits" className="h-20 w-20" />
                <h1 className="my-4 text-xl sm:text-2xl lg:text-3xl font-bold">Higher Profits</h1>
                <p className="text-gray-700 text-sm">
                    We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
                </p>
            </div>
            <div className="feature2 mr-3 my-4">
                <img src={image2} alt="Robust Scaling" className="h-20 w-20" />
                <h1 className="my-4 text-xl sm:text-2xl lg:text-3xl font-bold">Robust Scaling</h1>
                <p className="text-gray-700 text-sm">
                    Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
                </p>
            </div>
            <div className="feature3 mr-3 my-4">
                <img src={image3} alt="Best Selection" className="h-20 w-20" />
                <h1 className="my-4 text-xl sm:text-2xl lg:text-3xl font-bold">Best Selection</h1>
                <p className="text-gray-700 text-sm">
                    With 900+ products and top quality brands, you can choose the best products for your business.
                </p>
            </div>
        </div>
    );
};

export default Feature;
