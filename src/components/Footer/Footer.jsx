import FooterSocial from "./FooterSocial";
import { 
  integrationsLinks, 
  discoverLinks, 
  productsLinks, 
  servicesLinks, 
  companyLinks, 
  aboutLinks 
} from "../../constants";

const Footer = () => {
  const footerSections = [
    { title: "Integrations", links: integrationsLinks },
    { title: "Discover", links: discoverLinks },
    { title: "Products", links: productsLinks },
    { title: "Services", links: servicesLinks },
    { title: "Company", links: companyLinks },
    { title: "About", links: aboutLinks },
  ];

  return (
    <footer className="mt-20 bg-white border-b relative">
      <div className="container mx-auto px-6 py-10 footer relative z-10">
        <FooterSocial />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-lg">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-md font-semibold mb-4 font-serif">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-neutral-800 text-sm font-serif hover:text-green-700 transition-colors duration-300">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 p-4 bg-gray-100 text-center text-sm text-neutral-600 w-full font-serif">
        <p className="mb-2">
          <a href="#" className="hover:text-green-700">Intellectual Property Policy</a> | 
          <a href="#" className="hover:text-green-700"> Terms of Service</a> | 
          <a href="#" className="hover:text-green-700"> Privacy Policy</a> | 
          <a href="#" className="hover:text-green-700"> Security</a>
        </p>
        <p>© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
