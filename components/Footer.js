import Image from "next/image";
import React from "react";
import logo from "/public/LogoYellow.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondary text-gray-50">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2 mb-8 md:mb-0">
            <div className="relative w-52 h-20">
              <Image
                src={logo}
                fill={true}
                className="object-contain"
                alt="Logo"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <p>
                <span className="font-bold">Address:</span> 800 Hamilton Street
                Suite 3 Somerset NJ 08873
              </p>
              <Link href="tel:7144769783">
                <span className="font-bold">Phone:</span>{" "}
                <span className="underline">(714) 476-9783</span>
              </Link>
              <Link href="mailto: g.arora@happytodeliver.com">
                <span className="font-bold">Email:</span>{" "}
                <span className="underline">g.arora@happytodeliver.com</span>
              </Link>
            </div>
            <div className="flex space-x-3 mt-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/happytodeliverllc"
              >
                <div className="p-3 text-2xl text-secondary bg-primary rounded-full">
                  <FaFacebookF />
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/happytodeliver/"
              >
                <div className="p-3 text-2xl text-secondary bg-primary rounded-full">
                  <FaInstagram />
                </div>
              </a>
            </div>
          </div>

          <div className="font-semibold space-y-2 md:space-y-3">
            <p className="text-gray-400">Legal</p>
            <p>Legal Information</p>
            <p>Privacy Policy</p>
          </div>
          <div className="font-semibold space-y-2 md:space-y-3">
            <p className="text-gray-400">Company</p>
            <p>About Us</p>
            <p>Be an Affiliate</p>
            <p>Careers</p>
          </div>
          <div className="font-semibold space-y-2 md:space-y-3">
            <p className="text-gray-400">Proudly serving properties:</p>

            <p className="hover:underline">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.moderanewrochelle.com/"
              >
                Modera New Rochelle
              </a>
            </p>

            <p className="hover:underline">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.alistermontclair.com/"
              >
                Alister Montclair
              </a>
            </p>

            <p className="hover:underline">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.modera44.com/"
              >
                Modera44
              </a>
            </p>
          </div>
        </div>
        <div className="border-b border-b-gray-600 mt-12 mb-6" />
        <div className="items-center text-sm md:text-base">
          <div>Copyright ©2023 Happy to Deliver. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
