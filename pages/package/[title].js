import { useRouter } from "next/router"
import connectDb, { serializePackages } from "@/lib/mongoose";
import Package from "@/models/Package";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { defaultProps } from "@/components/PackageCard";
import Rating from "@/components/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCreditCard, faPlane, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function PackageDetail({ pkg }) {
    const router = useRouter()
    const pkgTitle = router.query.title
    return (
        <>
            <Navbar />
            <main className="px-5 pb-5">
                <div className="flex gap-1 py-3 mb-3 text-xs text-teal-800 font-light">
                    <Link href="/" scroll={true}>Home</Link>
                    <span>{`>`}</span>
                    <span>{pkg.title}</span>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="relative max-w-md md:w-full md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg overflow-hidden aspect-square">
                            <Image src={pkg.imgSrc || defaultProps.imgSrc} layout="fill" objectFit="cover" objectPosition="center" alt={pkg.title} />
                        </div>
                        <div className="flex flex-col gap-5 md:flex-1 xl:max-w-screen-lg">
                            <h1 className="font-bold text-teal-800 sm:text-3xl text-2xl">{pkg.title}</h1>
                            <div className="flex items-baseline gap-3">
                                <h2 className="font-bold text-lg leading-none">Price</h2>
                                <div className="flex items-end gap-1 leading-none text-3xl text-teal-800 brand-blue font-bold">
                                    <span>&euro;</span>
                                    <span> {pkg.price}</span>
                                </div>
                            </div>
                            <Rating value={pkg.rating}></Rating>
                            <h2 className="font-bold text-x leading-none">Features Included</h2>
                            <div className="flex flex-col gap-3">

                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-slate-100 hover:text-teal-800 text-white bg-teal-800 transition-colors duration-300">
                                        <FontAwesomeIcon icon={faPlane} className="leading-none text-xs" />
                                    </div>
                                    <p className="text-sm">Flights</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-slate-100 hover:text-teal-800 text-white bg-teal-800 transition-colors duration-300">
                                        <FontAwesomeIcon icon={faVanShuttle} className="leading-none text-xs" />
                                    </div>
                                    <p className="text-sm">Ground Transport</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-slate-100 hover:text-teal-800 text-white bg-teal-800 transition-colors duration-300">
                                        <FontAwesomeIcon icon={faCreditCard} className="leading-none text-xs" />
                                    </div>
                                    <p className="text-sm">E Visa</p>
                                </div>

                            </div>
                            <h2 className="font-bold text-x leading-none">Description</h2>
                            <p className="text-sm">Umrah Insights is offering {pkg.nights}-night, {pkg.rating}-star Umrah packages, commonly referred to as {'"'}one-week Umrah Packages,{`"`} at a highly competitive price of &euro; {pkg.price}. These packages are ideal for budget-conscious pilgrims seeking a shorter Umrah experience. Accommodation is provided in {pkg.rating}-star hotels, with {pkg.makkahNights || defaultProps.madinahNights} nights at {pkg.makkahHotel} in Mecca and {pkg.madinahNights || defaultProps.madinahNights} nights at {pkg.madinahHotel} in Madinah, in quad-sharing rooms. Umrah flights can be added to the package, but services such as Ziarats (tours), breakfast, and transport are not included and can be arranged separately if required.</p>
                            <p className="text-sm">For bookings or inquiries, reach out to their reservation team.</p>
                            <h2 className="font-bold text-x leading-none">More Details</h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-end relative">
                                    <FontAwesomeIcon icon={faCheck} className="text-teal-700 text-sm" />
                                    <div className="text-sm leading-none">Total stay will be {pkg.nights} Nights</div>
                                </div>
                                <div className="flex gap-2 items-end relative">
                                    <FontAwesomeIcon icon={faCheck} className="text-teal-700 text-sm" />
                                    <div className="text-sm leading-none">Quad sharing room</div>
                                </div>
                                <div className="flex gap-2 items-end relative">
                                    <FontAwesomeIcon icon={faCheck} className="text-teal-700 text-sm" />
                                    <div className="text-sm leading-none">Free ground transports available</div>
                                </div>
                                <div className="flex gap-2 items-end relative">
                                    <FontAwesomeIcon icon={faCheck} className="text-teal-700 text-sm" />
                                    <div className="text-sm leading-none">Indirect Airline flight with short stop. Direct flight available on special request</div>
                                </div>
                                <div className="flex gap-2 items-end relative">
                                    <FontAwesomeIcon icon={faCheck} className="text-teal-700 text-sm" />
                                    <div className="text-sm leading-none">Ziyarat will also include on special request</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-7">
                    <h1 className="font-bold brand-yellow sm:text-3xl my-5 text-2xl">Why Book with us ?</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-end relative">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-teal-700 text-sm" />
                            <div className="text-sm leading-none">Affordable pricing system</div>
                        </div>
                        <div className="flex gap-2 items-end relative">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-teal-700 text-sm" />
                            <div className="text-sm leading-none">Secure Payments</div>
                        </div>
                        <div className="flex gap-2 items-end relative">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-teal-700 text-sm" />
                            <div className="text-sm leading-none">Best and Affordable Hotels</div>
                        </div>
                        <div className="flex gap-2 items-end relative">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-teal-700 text-sm" />
                            <div className="text-sm leading-none">Easy booking system</div>
                        </div>
                        <div className="flex gap-2 items-end relative">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-teal-700 text-sm" />
                            <div className="text-sm leading-none">Email support</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const { title } = context.query;

    const pkg = await Package.findOne({ title }).lean();

    if (!pkg) {
        return {
            notFound: true,
        };
    }
    return {
        props: { pkg: serializePackages([pkg])[0] }, // Pass package data as props
    };
}
