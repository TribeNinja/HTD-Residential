import Image from "next/image";
import Link from "next/link";
import React from "react";
import approach1 from "/public/approach1.jpg";
import approach2 from "/public/approach2.jpg";
import approach3 from "/public/approach3.jpg";
import approach4 from "/public/approach4.jpg";

const OurApproach = () => {
  return (
    <div
      id="ourApproach"
      className="max-w-7xl mx-auto items-center py-16 md:py-24 xl:py-32 md:16 xl:mt-24 px-6 md:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <p className="text-3xl md:text-4xl font-bold">Our Approach</p>
          <div>
            <p className=" md:text-lg">
              In light of your specific needs, we believe that our Package
              Concierge will be very useful to your situation and can help you
              reach the tenant satisfaction level desired. <br /> <br /> This
              service was developed to help property management companies
              overcome these types of challenges with little stress. Our
              onboarding process will allow you to implement this solution with
              ease. <br /> <br />
              We work closely with your property manager and their team
              throughout the process.
            </p>
          </div>
          <div>
            <Link href="#contact">
              <p className="md:text-lg button-yellow">Contact Us Today</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-20 md:mt-0">
          <div className="space-y-4 md:space-y-6">
            <div className="relative w-full h-48 md:h-80">
              <Image
                src={approach1}
                alt="approach1"
                fill={true}
                className="rounded-xl object-cover"
              />
              <div className="absolute w-full h-full backdrop-brightness-50 rounded-xl" />
              <p className="absolute font-semibold md:text-2xl px-3 text-center text-white bottom-3 md:bottom-8">
                Direct To Residents Doors
              </p>
            </div>
            <div className="relative w-full h-48 md:h-80">
              <Image
                src={approach3}
                alt="approach3"
                fill={true}
                className="rounded-xl object-cover"
              />
              <div className="absolute w-full h-full backdrop-brightness-50 rounded-xl" />
              <p className="absolute font-semibold md:text-2xl px-3 text-center text-white bottom-3 md:bottom-8">
                Fast Same-Day Delivery
              </p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 -mt-20 md:-mt-24">
            <div className="relative w-full h-48 md:h-80">
              <Image
                src={approach2}
                alt="approach2"
                fill={true}
                className="rounded-xl object-cover"
              />
              <div className="absolute w-full h-full backdrop-brightness-50 rounded-xl" />
              <p className="absolute font-semibold md:text-2xl px-3 text-center text-white bottom-3 md:bottom-8">
                Re-prioritize Front Desk Workload
              </p>
            </div>
            <div className="relative w-full h-48 md:h-80">
              <Image
                src={approach4}
                alt="approach4"
                fill={true}
                className="rounded-xl object-cover"
              />
              <div className="absolute w-full h-full backdrop-brightness-50 rounded-xl" />
              <p className="absolute font-semibold md:text-2xl px-3 text-center text-white bottom-3 md:bottom-8">
                Instantly Happier Residents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
