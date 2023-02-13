import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "/public/Logo.svg";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={`${
        !scroll
          ? "opacity-100 translate-y-0 md:opacity-0 md:-translate-y-40"
          : "opacity-100 translate-y-0 border-b border-b-gray-400"
      } fixed top-0 w-full transition-all duration-150 z-30 bg-primary`}
    >
      {isOpen && (
        <div className="bg-white absolute left-0 w-full top-16 py-2">
          <Link href="#ourApproach" onClick={handleToggle}>
            <p className="hover:text-primary block px-4 py-2  transition-colors duration-200 ease-in-out">
              Our Approach
            </p>
          </Link>
          <Link href="#benefits" onClick={handleToggle}>
            <p className="hover:text-primary block px-4 py-2  transition-colors duration-200 ease-in-out">
              Benefits
            </p>
          </Link>
          <Link href="#testimonials" onClick={handleToggle}>
            <p className="hover:text-primary  block px-4 py-2 transition-colors duration-200 ease-in-out">
              Testimonials
            </p>
          </Link>
          <Link href="#contact" onClick={handleToggle}>
            <p className="button-dark text-sm mx-4 my-2 ">Contact us</p>
          </Link>
        </div>
      )}
      <div className="flex items-center max-w-7xl mx-auto md:py-3 px-6 md:px-12">
        {isOpen ? (
          <MdClose className="text-2xl md:hidden mr-3" onClick={handleToggle} />
        ) : (
          <GiHamburgerMenu
            className="text-2xl md:hidden mr-3"
            onClick={handleToggle}
          />
        )}

        <div>
          <Link href="/">
            <div className="w-44 h-16 md:w-56 md:h-20 lg:w-64 lg:h-20 relative">
              <Image src={logo} alt="logo" fill={true} />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex ml-auto items-center space-x-8 font-semibold text-secondary">
          <Link href="#ourApproach">
            <p className="hover:text-white transition-colors duration-200 ease-in-out">
              Our Approach
            </p>
          </Link>
          <Link href="#benefits">
            <p className="hover:text-white transition-colors duration-200 ease-in-out">
              Benefits
            </p>
          </Link>
          <Link href="#testimonials">
            <p className="hover:text-white transition-colors duration-200 ease-in-out">
              Testimonials
            </p>
          </Link>
          <Link href="#contact">
            <p className="button-dark">Contact us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
