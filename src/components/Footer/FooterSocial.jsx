import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faReddit } from '@fortawesome/free-brands-svg-icons';

const FooterSocial = () => {
  return (
    <div className="flex flex-col sm:flex-row  bg-white p-6 justify-between  items-center  ">
      <img src={logo} alt="Printify Logo" className="h-16 w-auto mb-4 sm:mb-0" />
      <div className="flex space-x-4 sm:space-x-4 sm:ml-4">
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
        </a>
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </a>
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
        </a>
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
        </a>
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
        </a>
        <a href="#" className="text-green-600 hover:text-green-700">
          <FontAwesomeIcon icon={faReddit} className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;


