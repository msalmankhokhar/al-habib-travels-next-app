import Image from "next/image"
import Link from "next/link"

export default function SpecialOffer() {
    return (
        <div id="special-offer-section" className="bg-pattern flex flex-col items-center lg:flex-row justify-center bg-teal-900">
            <div className="flex flex-col px-5 py-16 gap-5 max-w-screen-sm w-full">
                <h1 className="font-bold text-3xl text-white">Special Offers</h1>
                <h2 className="font-bold brand-yellow text-xl">{`"Unlock special offers on your Hajj and Umrah Journey"`}</h2>
                <p className="text-white">
                    {`Experience the spiritual journey of a lifetime with Al Habib Travel. We're excited to offer you exclusive discounts of up to 12% on all our Hajj and Umrah packages. Our team is dedicated to ensuring you get the best possible deals by comparing prices for hotels, flights, and transportation.`}
                </p>
                <Link href={'/contact'} type="button" className="text-center font-semibold min-w-36 w-min bg-white text-teal-900 hover:text-teal-700 transition-colors duration-300 text-sm p-3 rounded-full">Book Now</Link>
            </div>
            <div className="relative">
                <Image src={'/img/favBg.jpg'} width={620} height={620} alt="hajj crowd" />
            </div>
        </div>
    )
}
