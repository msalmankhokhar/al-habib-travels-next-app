import Image from "next/image"
import Link from "next/link"

export default function SpecialOffer() {
    return (
        <div id="special-offer-section" className="bg-pattern flex flex-col items-center lg:flex-row justify-around bg-teal-900">
            <div className="flex flex-col px-5 py-16 gap-5 max-w-screen-sm w-full">
                <h1 className="font-bold text-3xl text-white">Special Offers</h1>
                <h2 className="font-bold brand-yellow text-xl">{`"Unlock special offers on your Hajj and Umrah Journey"`}</h2>
                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque optio labore temporibus. Aperiam dolorem molestiae nihil officiis error dolor. Nobis ea qui assumenda quisquam facere perspiciatis ab, commodi veritatis aperiam molestias vel quia voluptate fugiat voluptatem excepturi! Dolores, quibusdam! Nobis vel dolores excepturi qui quisquam aperiam at distinctio, eaque unde alias aliquam omnis minus fuga.
                </p>
                <Link href={'/contact'} type="button" className="text-center font-semibold min-w-36 w-min bg-white text-teal-900 hover:text-teal-700 transition-colors duration-300 text-sm p-3 rounded-full">Book Now</Link>
            </div>
            <div className="relative">
                <Image src={'/img/favBg.jpg'} width={620} height={620} alt="hajj crowd" />
            </div>
        </div>
    )
}
