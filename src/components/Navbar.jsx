import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setDropdown(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setDropdown(null);
    };

    const handleDropdownToggle = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    return (
        <nav className="sticky top-0 bg-white border-b h-17 min-h-[70px] shadow-md z-50">
            <div className="container px-6 mx-auto flex items-center justify-between">
                <button onClick={toggleMenu} className="lg:hidden text-2xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="flex items-center">
                    <img className="h-16 w-auto" src={logo} alt="Logo" />
                </div>

                <ul className="hidden lg:flex space-x-6 mx-auto text-base font-serif">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <a 
                                href={item.href} 
                                className="transition-all duration-100 text-neutral-800 text-sm hover:text-green-700"
                                onClick={item.subItems ? (e) => {
                                    e.preventDefault();
                                    handleDropdownToggle(item.label);
                                } : undefined}
                            >
                                {item.label} 
                                {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
                            </a>

                            {dropdown === item.label && item.subItems && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                                    <ul className="flex flex-col p-2">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="text-neutral-800 text-sm hover:text-green-700">
                                                <a href={subItem.href} className="block px-4 py-2">{subItem.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex space-x-4 ml-3">
                    <a
                        href="#login"
                        className="text-black border border-black px-4 py-1 text-base rounded-md hover:text-green-600 transition-colors duration-300 font-serif"
                    >
                        Log in
                    </a>
                    <a
                        href="#signup"
                        className="bg-green-600 text-white border border-black px-4 py-1 rounded-md text-base hover:bg-green-700 transition-colors duration-300 font-serif"
                    >
                        Sign Up
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-3/5 h-full bg-white shadow-lg z-50 transition-transform duration-300 p-6">
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <h2 className="text-2xl font-semibold font-serif">Menu</h2>
                        <button onClick={closeMenu} className="text-2xl text-gray-600 hover:text-red-600">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="text-neutral-800 font-serif text-sm hover:text-green-700 transition-colors duration-300">
                                <a 
                                    href={item.href} 
                                    className="text-lg"
                                    onClick={item.subItems ? (e) => {
                                        e.preventDefault();
                                        handleDropdownToggle(item.label);
                                    } : closeMenu}
                                >
                                    {item.label}
                                    {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
                                </a>
                                {dropdown === item.label && item.subItems && (
                                    <ul className="ml-4">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="text-neutral-800 text-sm mx-2 my-2 hover:text-green-700">
                                                <a href={subItem.href} className="text-base my-2" onClick={closeMenu}>
                                                    {subItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
