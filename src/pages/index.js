import Benefits from "components/Benefits";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import OurApproach from "components/OurApproach";
import PackageProblems from "components/PackageProblems";
import Testimonials from "components/Testimonials";
import VideoSection from "components/VideoSection";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy To Deliver Package Valet</title>
        <meta
          name="description"
          content="Happy to Deliver is revolutionizing package management for multi-family residences. With our affordable and convenient service, residents can enjoy stress-free delivery straight to their doors."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <OurApproach />
      <PackageProblems />
      <VideoSection />
      <Testimonials />
      <Benefits />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}
