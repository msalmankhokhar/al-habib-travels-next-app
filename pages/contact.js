import ContactCard from "@/components/ContactCard";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Testemonial from "@/components/Testemonial";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import QueryForm from "@/components/Sections/QueryForm";

export default function Contact() {
  return (
    <>
      <Head
        title={"Contact Us | Al Habib Travel Ltd."}
        desc={
          "Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"
        }
      />
      <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
        <p className="text-white text-center text-xs xs:text-sm">
          Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner
        </p>
      </div>
      <Navbar />
      
      <main>
        <div className="py-20 flex flex-col gap-5 w-screen px-3 md:px-5 lg:px-10 bg-[#D4A10F0D]">
          <div className="flex flex-col gap-3">
            <h1 id="contact-us-h" className="text-center text-4xl leading-none font-extrabold brand-blue">
              Contact Us
            </h1>
            <p className="text-base mb-5 text-center">
              You{`'`}re welcome to contact us using the contact details listed
              below
            </p>
          </div>
          <div className="flex gap-10 flex-wrap-reverse 2xl:gap-28 justify-center">
            {/* contact cards wrapper */}
            <div className="flex flex-col gap-5">
              <ContactCard
                imgName={'phone.png'}
                contactNo={"0203 504 2344"}
                contactMethod={"Call Now"}
                responseTime={"1 Min"}
              />
              <ContactCard
                imgName={'whatsapp.png'}
                contactNo={"+44203 504 2344"}
                contactMethod={"WhatsApp"}
                responseTime={"1 Min"}
              />
              <ContactCard
                imgName={'mail.png'}
                contactNo={"info@alhabibtravel.co.uk"}
                contactMethod={"Email"}
                responseTime={"1 Hour"}
              />
            </div>
            {/* Query / Contact Form */}
            {/* <form id="contact-query-form" className="bg-white relative px-5 sm:px-10 py-10 rounded-xl border-[1.4px] border-amber-400 w-full max-w-xl flex flex-col gap-3">
              <h1 className="font-bold brand-yellow text-4xl">We are here to assist you!</h1>
              <p className="font-semibold text-base">Here is a form you need to fill out. We will get back to you when it works best for us.</p>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm">
                  Your Full Name*
                </label>
                <input
                  id="name-input"
                  type="text"
                  className="p-3 outline-none rounded-full border border-gray-600 text-sm transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm">
                  Email*
                </label>
                <input
                  type="email"
                  className="p-3 outline-none rounded-full w-full border border-gray-600 text-sm transition-all duration-300"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="p-3 outline-none rounded-full w-full border border-gray-600 text-sm transition-all duration-300"
                  placeholder="Phone"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm">
                  Number of People*
                </label>
                <input
                  type="number"
                  className="p-3 outline-none rounded-full w-full border border-gray-600 text-sm transition-all duration-300"
                  placeholder="No. of People"
                />
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name-input" className="text-sm">
                    Month of Departure*
                  </label>
                  <select
                    className="p-3 outline-none rounded-full w-full border border-gray-600 text-sm transition-all duration-300"
                    placeholder="Departure Month"
                  >
                    <option value="" selected>
                      Select Month
                    </option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name-input" className="text-sm">
                    Departure Airport
                  </label>
                  <select
                    className="p-3 outline-none rounded-full w-full border border-gray-600 text-sm transition-all duration-300"
                    placeholder="Departure Month"
                  >
                    <option value="" selected>
                      Select Airport
                    </option>
                    <option value="January">London International Airport</option>
                    <option value="February">UK Airport</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="btn w-full relative m-auto flex justify-center bg-brand-blue hover:bg-teal-800 text-white font-semibold mt-3 xs:min-w-96 transition-colors duration-300 text-sm p-4 rounded-full"
              >
                <span className="leading-none">Submit Now</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="btn-arrow leading-none absolute"
                ></FontAwesomeIcon>
              </button>
            </form> */}
            <QueryForm/>
          </div>
        </div>

        <Reviews />
        <Faqs />

      </main>

      <Footer/>
    </>
  );
}
