import React from "react";
import NationalityDropdown from "../NationalityDropdown";
import Image from "next/image";
export default function VisaForm() {
  return (
    <div className="my-20">
      <h1 className="text-center brand-blue font-bold text-3xl md:text-6xl">
        Apply Now for Saudi Visa
      </h1>
      <div className="flex justify-center gap-5 my-10">
        <div className="flex flex-col gap-5 w-full bg-[#00454A0D] p-10 rounded-lg">
          <NationalityDropdown />
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              className="rounded-full p-4 outline-none border-[1.5px] border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="rounded-full p-4 outline-none border-[1.5px] border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Contact Number</label>
            <input
              id="fullname"
              type="number"
              placeholder="+1 (5551 000-0000)"
              className="rounded-full p-4 outline-none border-[1.5px] border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="applying-for">Applying For:</label>
            <div id="applying-for" className="ml-10 grid grid-cols-2">
              <div className="flex gap-2 items-baseline">
                <input type="checkbox" />
                <span className="font-semibold">Toursim</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <input type="checkbox" />
                <span className="font-semibold">Business</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <input type="checkbox" />
                <span className="font-semibold">Umrah</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <input type="checkbox" />
                <span className="font-semibold">Transit</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-brand-blue font-semibold text-white px-6 py-2 rounded-lg">
              SHOW ELIGIBLE VISAS
            </button>
          </div>
        </div>
        <div className="hidden md:block relative w-full h-[700px]">
          <Image
            className="rounded-lg"
            src={"/img/passport.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
