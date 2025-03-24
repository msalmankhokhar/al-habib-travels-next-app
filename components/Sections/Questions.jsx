import React from "react";
import Image from "next/image";
export default function Questions() {
  return (
    // <div className="relative h-[300px] md:h-[600px] bg-pattern my-20">
    //     <Image className="max-h-[500px]" src={"/img/anyQuestions.png"} alt="have any question ?" fill/>
    // </div>
    <div className="bg-pattern-dark my-20">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center px-3 py-7">
          <Image width={800} height={400} src={"/img/anyQuestions.png"} alt="have any question ?"/>
      </div>
    </div>
  );
}
