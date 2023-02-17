import Image from "next/image";
import React from "react";
import logo from "/public/Logo.svg";
import heroImage from "/public/hero-image-min.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary">
      <div className="relative hidden md:flex mx-auto max-w-7xl w-full items-center py-3 px-6 md:px-12 z-20">
        <div>
          <Link href="/">
            <div className="w-64 h-20 relative">
              <Image src={logo} alt="logo" fill={true} />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex ml-auto items-center space-x-8 font-semibold text-white">
          <Link href="#ourApproach">
            <p className="hover:text-primary transition-colors duration-200 ease-in-out">
              Our Approach
            </p>
          </Link>
          <Link href="#benefits">
            <p className="hover:text-primary transition-colors duration-200 ease-in-out">
              Benefits
            </p>
          </Link>
          <Link href="#testimonials">
            <p className="hover:text-primary transition-colors duration-200 ease-in-out">
              Testimonials
            </p>
          </Link>

          <Link href="#contact">
            <p className="button-yellow text-secondary">Contact us</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center md:-mt-28">
        <div className="px-6 md:px-12 space-y-6 md:space-y-10 lg:space-y-12">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-snug xl:leading-snug mt-24 md:mt-0">
            Happy to Deliver Package Valet
          </h1>
          <p className=" md:text-xl md:pr-10">
            Pioneering the first on-site delivery management service that
            eliminates all the stress of package management and brings packages
            from your mail room straight to your residents homes at a fraction
            of the price and a marketable amenity.
          </p>
          <div>
            <Link href="#contact">
              <p className="button-dark md:text-xl">Request a Demo</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative h-[23rem] mt-10 md:mt-0 md:h-screen">
            <Image
              src={heroImage}
              alt="hero image"
              objectFit="cover"
              className="object-top"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
