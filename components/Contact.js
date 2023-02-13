import axios from "axios";
import Image from "next/image";
import { BiLoaderAlt } from "react-icons/bi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import contactImage from "/public/contactImage.webp";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/api/contact", {
        fullName,
        email,
        phone,
        property,
        message,
      });
      setFullName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setProperty("");
      toast.success("Thank you! We'll reach out to you ASAP!", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "colored",
        style: {
          backgroundColor: "#FFD602",
          color: "#231F20",
        },
        progress: undefined,
      });
    } catch {
      console.log(err);
      toast.success("Something went wrong! Please try again later.", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "colored",
        style: {
          backgroundColor: "#FFD602",
          color: "#231F20",
        },
        progress: undefined,
      });
    }

    setLoading(false);
  };
  return (
    <div id="contact" className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3 md:mr-12 py-20 md:py-24 xl:py-28 px-6 md:px-12">
          <div className="space-y-4 md:space-y-5">
            <p className="text-3xl md:text-4xl xl:text-5xl font-semibold">
              Get in Touch
            </p>
            <p className="text-gray-500 max-w-lg">
              We're here to help! If you have any questions or concerns about
              our services, please don't hesitate to reach out.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mt-6 md:mt-8 xl:mt-12">
              <div>
                <p className="font-semibold xl:text-lg">Full Name</p>
                <input
                  required
                  onChange={(event) => setFullName(event?.target?.value ?? "")}
                  value={fullName}
                  type="text"
                  placeholder="Input your full name in here"
                  name="fullName"
                  className="mt-3 md:mt-4 p-4 border border-gray-300 w-full"
                />
              </div>
              <div>
                <p className="font-semibold xl:text-lg">Email Address</p>
                <input
                  required
                  onChange={(event) => setEmail(event?.target?.value ?? "")}
                  value={email}
                  type="email"
                  placeholder="Input your email address in here"
                  name="emailAddress"
                  className="mt-3 md:mt-4 p-4 border border-gray-300 w-full"
                />
              </div>

              <div className="mt-2 md:mt-4">
                <p className="font-semibold xl:text-lg">Property Name</p>
                <input
                  required
                  onChange={(event) => setProperty(event?.target?.value ?? "")}
                  value={property}
                  type="text"
                  placeholder="Input your property name in here"
                  name="property"
                  className="mt-3 md:mt-4 p-4 border border-gray-300 w-full"
                />
              </div>
              <div className="mt-2 md:mt-4">
                <p className="font-semibold xl:text-lg">Phone Number</p>
                <input
                  required
                  onChange={(event) => setPhone(event?.target?.value ?? "")}
                  value={phone}
                  type="number"
                  placeholder="Input your phone number in here"
                  name="phoneNumber"
                  className="mt-3 md:mt-4 p-4 border border-gray-300 w-full"
                />
              </div>
            </div>
            <div className="mt-8 md:mt-10 xl:mt-12">
              <p className="font-semibold xl:text-lg">Message</p>
              <textarea
                required
                onChange={(event) => setMessage(event?.target?.value ?? "")}
                value={message}
                rows="5"
                type="text"
                placeholder="Input your message in here"
                name="message"
                className="mt-3 md:mt-4 p-4 border border-gray-300 w-full"
              />
            </div>

            <div className="mt-10">
              <button
                disabled={loading && true}
                className="button-yellow font-bold"
                type="submit"
              >
                {loading ? (
                  <BiLoaderAlt className="animate-spin text-xl" />
                ) : (
                  <p>Send Message</p>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-2 hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src={contactImage}
              fill={true}
              alt="Contact Image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
