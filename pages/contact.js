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
