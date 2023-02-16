import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoSection = () => {
  const [rehydration, setRehydration] = useState(false);

  useEffect(() => {
    setRehydration(true);
  }, [rehydration]);

  if (!rehydration) {
    return null;
  } else {
    return (
      <div className="max-w-7xl mx-auto my-20 md:py-24 xl:py-28 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <ReactPlayer
              controls
              width="80%"
              height="80%"
              url="/HTDvideo.mp4"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <p className="text-4xl xl:text-5xl font-semibold leading-snug md:leading-snug xl:leading-snug mt-6 md:mt-0">
              From the Front Desk to Your-Front-Door
            </p>
            <div>
              <p>
                Take a sneak peek behind the scenes and see how our team works
                to ensure your packages are delivered safely and efficiently.
                From the moment a package arrives at our facility, to the moment
                it's delivered right to your door, our dedicated team is working
                hard to make sure everything runs smoothly.
              </p>
            </div>
            <div>
              <Link href="#contact">
                <p className="md:text-lg button-yellow text-secondary">
                  Contact Us Today
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoSection;
