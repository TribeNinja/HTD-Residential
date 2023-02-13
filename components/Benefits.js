import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Benefits = () => {
  const benefits = [
    {
      benefit: "Same day, Direct-to-your Door Delivery",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Removes packages from the mailing room",
      htd: true,
      packageLockers: true,
      amazonHub: true,
    },
    {
      benefit: "Background-checked *Delivery* Concierges",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Touchless (no sanitization needed)",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Fast customer service for staff and residents",
      htd: true,
      packageLockers: true,
      amazonHub: false,
    },
    {
      benefit: "Dedicated account manager to each community",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Increases the comfort of receiving packages",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit:
        "Reducing stress and improving safety for Apartment Staff/Management",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Package Concierge picks up and delivers to each apartment",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit: "Convenience and trust for residents of the community",
      htd: true,
      packageLockers: true,
      amazonHub: false,
    },
    {
      benefit:
        "Removes packages from lobby, making it safer for staff/residents",
      htd: true,
      packageLockers: false,
      amazonHub: false,
    },
    {
      benefit:
        "All packages are logged prior to delivery to apartment, reducing risk of theft or loss of packages",
      htd: true,
      packageLockers: true,
      amazonHub: false,
    },
  ];
  return (
    <div id="benefits" className="bg-primary">
      <div className="max-w-7xl mx-auto py-28 px-6 md:px-12 overflow-auto">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="space-y-2 w-64 md:w-auto">
              <p className="text-xl md:text-2xl xl:text-3xl font-semibold">
                Happy To Deliver Concierge Service
              </p>
              <p className="md:text-lg hidden md:block">
                Delivers packages from your concierge to the residents front
                door
              </p>
            </div>
            <p className="md:text-xl font-semibold mt-6 md:mt-8">Benefits:</p>
          </div>
          <div className="flex text-center">
            <div className="w-40 md:w-48 bg-gray-50 py-6 rounded-t-lg">
              <p className="text-xl md:text-2xl font-bold">Happy To Deliver</p>
              <p className="px-4 py-1 text-xs md:text-sm bg-secondary text-white rounded-full mt-4 md:mt-6 inline-block">
                Best value
              </p>
            </div>
            <p className="text-xl md:text-2xl font-bold w-32 md:w-40 pt-6">
              Package Lockers
            </p>
            <p className="text-xl md:text-2xl font-bold w-32 md:w-40 pt-6 mr-6 md:mr-0">
              Amazon Hub
            </p>
          </div>
        </div>

        <div>
          {benefits.map((benefit, index) => (
            <div key={index}>
              <div className="border-t-2 border-t-gray-50 w-full absolute -ml-6 md:ml-0 md:relative" />

              <div className="flex">
                <div className="my-auto flex-1">
                  <p className="text-sm md:text-xl mr-4 md:mr-14 w-60 md:w-auto">
                    {benefit.benefit}
                  </p>
                </div>

                <div className="flex ml-auto items-center ">
                  {benefit.htd ? (
                    <div
                      className={`${
                        index == benefits.length - 1 && "pb-8 rounded-b-lg"
                      } bg-gray-50 py-5`}
                    >
                      <TiTick className="text-2xl text-green-500 mx-auto w-40 md:w-48" />
                    </div>
                  ) : (
                    <div className=" bg-gray-50 py-5">
                      <RxCross2 className="text-2xl text-red-600 mx-auto w-40 md:w-48" />
                    </div>
                  )}
                  {benefit.packageLockers ? (
                    <TiTick className="text-2xl text-green-500 mx-auto w-32 md:w-40" />
                  ) : (
                    <RxCross2 className="text-2xl text-red-600 mx-auto w-32 md:w-40" />
                  )}
                  {benefit.amazonHub ? (
                    <TiTick className="text-2xl text-green-500 mx-auto w-32 md:w-40" />
                  ) : (
                    <RxCross2 className="text-2xl text-red-600 mx-auto w-32 md:w-40" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary py-4 text-center">
        <Link href="#contact">
          <p className="button-yellow px-20 font-bold">Request A Demo</p>
        </Link>
      </div>
    </div>
  );
};

export default Benefits;
