import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      testimonial:
        "I was blown away by the convenience of Happy To Deliver's valet package delivery service. No more trips to the mail room or missed deliveries, they bring my packages straight to my door at a great price. It's a real lifesaver!",
      designation: "Resident at ABC Apartments",
    },
    {
      name: "John Smith",
      testimonial:
        "I was hesitant to try a new delivery service, but I'm so glad I gave Happy To Deliver a chance. They've made package management a breeze and have saved me so much time and hassle. I highly recommend them!",
      designation: "Property Manager at XYZ Buildings",
    },
    {
      name: "Jessica Wilson",
      testimonial:
        "I love the peace of mind that comes with using Happy To Deliver. Knowing that my packages are securely managed and delivered directly to me is such a relief. It's a real game changer for package delivery!",
      designation: "Resident at 123 Condos",
    },
    {
      name: "Michael Nguyen",
      testimonial:
        "As someone who frequently receives packages, I couldn't be happier with Happy To Deliver. Their valet delivery service has made my life so much easier and I love the added security of having my packages delivered directly to me. Thank you Happy To Deliver!",
      designation: "Resident at Luxe Lofts",
    },
    {
      name: "Emily Davis",
      testimonial:
        "I'm so impressed with the professionalism and reliability of Happy To Deliver. Their valet delivery service has been a real asset to our community and I'm so grateful for the convenience and peace of mind it provides. I highly recommend them!",
      designation: "Community Manager at Park Place Residences",
    },
  ];

  return (
    <div id="testimonials">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" bg-secondary py-20 md:py-24 xl:py-28 text-white text-center px-6"
          >
            <div className=" max-w-3xl mx-auto space-y-3">
              <FaQuoteLeft className="text-3xl text-primary mx-auto" />
              <p className="md:text-lg xl:text-xl h-40 md:h-28">
                {testimonial.testimonial}
              </p>
              <p className="text-primary font-bold md:text-lg xl:text-xl">
                {testimonial.name}
              </p>
              <p className="text-primary font-medium md:text-lg">
                {testimonial.designation}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
