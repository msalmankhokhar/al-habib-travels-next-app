import React from "react";
import VisaCard from "../VisaCard";
export default function VisaCards() {
  return (
    <div className="my-20">
      <h1 className="text-center brand-yellow font-bold text-3xl md:text-5xl">
        Explore Saudi Visa Options for Umrah
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-5">
        <VisaCard
          imgSrc={"/img/visacards/image1.png"}
          price={"150/pp"}
          title={"Umrah Visa"}
          validFor={"90 days after issuance"}
          enteriesNumber={"single-entry"}
          maxStay={"90 days"}
          eligibility={"All Type Nationals"}
        />
        <VisaCard
          imgSrc={"/img/visacards/image2.png"}
          price={"120/pp"}
          title={"Tourist Visa"}
          validFor={"1 Year after issuance"}
          enteriesNumber={"Multiple "}
          maxStay={"90 days"}
          eligibility={"British/European Nationals"}
        />
        <VisaCard
          imgSrc={"/img/visacards/image3.png"}
          price={"33/pp"}
          title={"E waiver Visa"}
          validFor={"90 days"}
          enteriesNumber={"single-entry"}
          maxStay={"90 days"}
          eligibility={"British Nationals Only"}
        />
      </div>
    </div>
  );
}
