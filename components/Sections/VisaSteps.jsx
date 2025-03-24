import React from "react";

export default function VisaSteps() {
  return (
    <div className="my-20">
      <h1 className="text-center brand-blue font-bold text-3xl md:text-5xl">
        3 Easy Steps
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0 md:justify-around w-[80%] mx-auto py-8 shadow-[0_3px_10px_rgb(0_0_0_/_0.2)] my-4 rounded-lg">
        <div className="flex gap-2 items-baseline pl-10 md:pl-0 md:justify-start">
          <p className="brand-yellow text-2xl font-semibold">01.</p>
          <p className="font-semibold">Fill the application</p>
        </div>
        <div className="flex gap-2 items-baseline pl-10 md:pl-0 md:justify-start">
          <p className="brand-yellow text-2xl font-semibold">02.</p>
          <p className="font-semibold">Pay the Visa fee</p>
        </div>
        <div className="flex gap-2 items-baseline pl-10 md:pl-0 md:justify-start">
          <p className="brand-yellow text-2xl font-semibold">03.</p>
          <p className="font-semibold">Get your online Visa</p>
        </div>
        <div className="mx-auto md:mx-0">
          <button className="brand-yellow font-bold border-2 px-4 py-1 rounded-full border-[#D4A10F]">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
