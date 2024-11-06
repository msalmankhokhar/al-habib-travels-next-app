import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faInstagramSquare, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBed, faBus, faCarSide, faCheck, faCreditCard, faPlane, faStar, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";

export const defaultProps = {
  title: '7 Nights 5 Star Umrah Package',
  imgSrcCustom: '/img/ramadan-pkg-card.png',
  imgSrc: '/img/pkgs/dummy.jpg',
  price: 885,
  rating: 5,
  makkahHotel: 'EMAAR AL KHALIL',
  madinahHotel: 'Pullman Zamzam',
  makkahNights: 3,
  madinahNights: 4
}

export default function PackageCard({ title, imgSrc, imgSrcCustom, price, rating, makkahHotel, madinahHotel, makkahNights, madinahNights }) {

  return (
    <div className="pkgcard border rounded-lg overflow-hidden w-full">
      <div className="imgHolder relative w-full">
        <Image layout="fill" objectFit="cover" objectPosition="center" src={imgSrcCustom || imgSrc || defaultProps.imgSrc} alt="Package card cover photo" />
        <div className="absolute top-0 right-0 p-2 px-5 w-32 rounded-es-lg text-white flex flex-col bg-teal-800">
          <div className="font-light tracking-wider text-xs">Price</div>
          <div className="font-bold text-lg">&pound; <span className="text-2xl">{price}</span></div>
        </div>
      </div>
      <div className="py-3 px-3 flex flex-col gap-3">
        <h2 className="leading-none font-bold text-lg brand-blue">{title}</h2>
        <Rating value={rating}/>
        <div className="flex gap-2 items-end">
          <div className="text-xs leading-none font-semibold text-gray-600">{makkahHotel} ({makkahNights || defaultProps.makkahNights} Nights) <span className="text-xs text-black">in Makkah</span></div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="text-xs leading-none font-semibold text-gray-600">{madinahHotel} ({madinahNights || defaultProps.madinahNights} Nights) <span className="text-xs text-black">in Madinah</span></div>
        </div>
        <h3 className="brand-blue leading-none font-semibold">Includes</h3>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-end relative">
            <FontAwesomeIcon icon={faPlane} className="text-teal-700 text-xs" />
            <div className="text-xs leading-none">Flight</div>
            <FontAwesomeIcon icon={faCheck} className="text-xs absolute right-10" />
          </div>
          <div className="flex gap-2 items-end relative">
            <FontAwesomeIcon icon={faCreditCard} className="text-teal-700 text-xs" />
            <div className="text-xs leading-none">Visa</div>
            <FontAwesomeIcon icon={faCheck} className="text-xs absolute right-10" />
          </div>
          <div className="flex gap-2 items-end relative">
            <FontAwesomeIcon icon={faBed} className="text-teal-700 text-xs" />
            <div className="text-xs leading-none">Hotel Accommodation</div>
            <FontAwesomeIcon icon={faCheck} className="text-xs absolute right-10" />
          </div>
          <div className="flex gap-2 items-end relative">
            <FontAwesomeIcon icon={faVanShuttle} className="text-teal-700 text-xs" />
            <div className="text-xs leading-none">Ground Transport</div>
            <FontAwesomeIcon icon={faCheck} className="text-xs absolute right-10" />
          </div>
        </div>
        <Link scroll={false} href={`/package/${title}`} className="text-center min-w-36 bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">View Details</Link>
      </div>
    </div>
  )
}
