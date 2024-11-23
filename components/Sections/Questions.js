import React from "react";
import Image from "next/image";
export default function Questions() {
  return (
    <div className="relative h-[300px] md:h-[600px] my-20">
        <Image src={"/img/anyQuestions.png"} fill/>
    </div>
  );
}
