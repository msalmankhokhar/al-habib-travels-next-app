import React from "react";
import Head from "@/components/Head";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import VisaForm from "@/components/Sections/VisaForm";
import VisaCards from "@/components/Sections/VisaCards";
import VisaSteps from "@/components/Sections/VisaSteps";
import Questions from "@/components/Sections/Questions";
import Insights from "@/components/Sections/Insights";
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import Footer from "@/components/Footer";
export default function visa() {
  return (
    <div>
      <Head
        title={"Saudi Visa"}
        desc={
          "Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"
        }
      />
      <TopBanner/>
      <Navbar />
      <div className="container mx-auto">
        <VisaForm />
        <VisaCards />
        <VisaSteps />
        <div className="px-5 flex flex-col lg:flex-row gap-5 justify-center items-center my-20">
          <div className="shadow-lg">
            <iframe
              id="yt-video-iframe"
              className="w-full max-w-[500px] h-80 rounded-lg"
              src="https://www.youtube.com/embed/bWLKvCuYM6Q"
              title="Suadi Visa Application Process"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-5 max-w-[450px] w-full items-center lg:items-start">
            <h1 className="font-bold text-2xl">
              A Comprehensive Guide for Saudi Visa Application Process
            </h1>
            <p className="text-gray-500">
              {`Watch our comprehensive guide on the Saudi visa application process. Find out how to apply for a visa with ease, whether it's for Tourism, Umrah, Business, or Transit. A step-by-step video explains eligibility, documents needed, and tips for submitting an application without hassle. Click the play button and get all the information you need to make your spiritual journey seamless!`}
            </p>
            <button
              type="button"
              className="min-w-36 w-min bg-brand-yellow hover:bg-teal-800 transition-colors duration-300 text-lg font-bold p-1 text-white rounded-lg"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <Questions />
      <Insights />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  );
}
