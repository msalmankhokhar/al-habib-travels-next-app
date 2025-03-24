import React from "react";
export default function Insights() {
  return (
    <div
      className="my-20 p-10 flex flex-col justify-center md:px-32 md:py-16 bg-cover bg-center h-[600px] w-full"
      style={{ backgroundImage: "url('/img/bgInsights.jpg')" }}
    >
      <div className="rounded-lg bg-[#00454A]">
        <div className="text-center brand-yellow p-5 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold md:font-bold">
            Captivating Insights
          </h1>
          <p className="font-semibold">Discover Key Metrics and Achievements</p>
        </div>
        <div className="bg-white w-full brand-blue flex flex-col md:flex-row items-center justify-start gap-4 p-2 md:p-7">
          <div className="md:w-1/3 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl text-center">19 Million</h2>
            <p className="w-2/3 text-center font-semibold">
              visas successfully issued in 2023 by Saudi Embassy
            </p>
          </div>
          <div className="w-full md:w-[0.1px] h-[0.1px] md:h-16 bg-brand-yellow"></div>
          <div className="md:w-1/3 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl text-center">70 Nations</h2>
            <p className="w-2/3 text-center font-semibold">
              partnered in Saudi visa digitization efforts
            </p>
          </div>
          <div className="w-full md:w-[0.1px] h-[0.1px] md:h-16 bg-brand-yellow"></div>
          <div className="md:w-1/3 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl text-center">60 Seconds</h2>
            <p className="w-2/3 text-center font-semibold">
              duration of e-Visa issuance
            </p>
          </div>
        </div>
        <div className="p-5 md:p-16 text-center">
          <button className="border border-[#D4A10F] bg-white brand-yellow font-semibold rounded-full px-4 py-1">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
