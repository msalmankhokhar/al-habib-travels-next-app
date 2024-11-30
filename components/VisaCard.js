import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export const defaultProps = {
  title: "Umrah Visa",
  imgSrcCustom: "/img/ramadan-pkg-card.png",
  imgSrc: "/img/pkgs/dummy.jpg",
  price: 150,
  validFor: 1,
  enteriesNumber: 2,
  maxStay: 3,
  eligibility: 4,
};

export default function PackageCard({
  title,
  type,
  imgSrc,
  imgSrcCustom,
  price,
  validFor,
  enteriesNumber,
  maxStay,
  eligibility,
}) {
  return (
    <div className="pkgcard border rounded-lg overflow-hidden w-full">
      <div className="imgHolder relative w-full">
        <Image
          className="bg-gray-200"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={
            type === "Ramadan"
              ? "/img/pkgs/ramadan.png"
              : imgSrcCustom || imgSrc || defaultProps.imgSrc
          }
          alt="Package card cover photo"
        />
        <div className="absolute bottom-4 right-4 p-2 px-5 w-32 rounded-lg text-white flex flex-col bg-brand-yellow">
          <div className="font-light tracking-wider text-xs">Cost</div>
          <div className="font-bold text-lg">
            &pound; <span className="text-lg">{price}</span>
          </div>
        </div>
      </div>
      <div className="py-3 px-3 flex flex-col gap-3 bg-[#007B830D]">
        <h2 className="leading-none text-center my-2 font-bold text-lg brand-blue">
          {title}
        </h2>
        <div className="w-full bg-brand-yellow h-[0.1px]"></div>
        <div className="flex flex-col gap-3 mx-8 text-sm my-3">
          <div className="flex items-center gap-1 justify-start">
            <p className="font-bold">Valid For:</p>
            <p>{validFor}</p>
          </div>
          <div className="flex items-center gap-1 justify-start">
            <p className="font-bold">Number of Entries:</p>
            <p>{enteriesNumber}</p>
          </div>
          <div className="flex items-center gap-1 justify-start">
            <p className="font-bold">Max Stay:</p>
            <p>{maxStay}</p>
          </div>
          <div className="flex items-center gap-1 justify-start">
            <p className="font-bold">Eligible</p>
            <p>{eligibility}</p>
          </div>
        </div>
        <Link
          scroll={false}
          href={`/package/${title}`}
          className="text-center w-[50%] border-teal-800 border-2 hover:bg-teal-800 transition-colors duration-300 text-xl font-bold py-2 mx-auto brand-yellow rounded-full"
        >
          Get Now
        </Link>
      </div>
    </div>
  );
}
