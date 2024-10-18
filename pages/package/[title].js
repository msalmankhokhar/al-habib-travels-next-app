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
import Head from "@/components/Head";

export default function PackageDetail({ pkg }) {
    const router = useRouter()
    const pkgTitle = router.query.title
    return (
        <>
            <Head
                title={`${pkg.title} | Al Habib Travel`}
                desc={`Al Habib Travel is offering ${pkg.nights}-night, ${pkg.rating}-star Umrah packages, commonly referred to a "one-week Umrah Packages", at a highly competitive price of &euro; ${pkg.price}. These packages are ideal for budget-conscious pilgrims seeking a shorter Umrah experience. Accommodation is provided in ${pkg.rating}-star hotels, with ${pkg.makkahNights || defaultProps.madinahNights} nights at 
                ${pkg.makkahHotel} in Mecca and ${pkg.madinahNights || defaultProps.madinahNights} nights at ${pkg.madinahHotel} in Madinah, in quad-sharing rooms. Umrah flights can be added to the package, but services such as Ziarats (tours), breakfast, and transport are not included and can be arranged separately if required.`}
                imgSrc={pkg.imgSrc || defaultProps.imgSrc}
            />
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
                            <Image src={pkg.imgSrc || defaultProps.imgSrc} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAPAAD/4QMbaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjEtYzAwMCA3OS5kYWJhY2JiLCAyMDIxLzA0LzE0LTAwOjM5OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTU4RDA4NDhBNzQxMUVGQjMzMzlDMUI0QkIwRUI5QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTU4RDA4MzhBNzQxMUVGQjMzMzlDMUI0QkIwRUI5QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjAyMSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9Ijc1NzQzMjg5RDUwN0M4MTc5MzZFN0E1RDYzNEY0NDM0IiBzdFJlZjpkb2N1bWVudElEPSI3NTc0MzI4OUQ1MDdDODE3OTM2RTdBNUQ2MzRGNDQzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEABMPDxcRFyUWFiUvJB0kLywkIyMkLDoyMjIyMjpDPT09PT09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`} objectPosition="center" alt={pkg.title} />
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
                            <p className="text-sm">Al Habib Travel is offering {pkg.nights}-night, {pkg.rating}-star Umrah packages, commonly referred to as {'"'}one-week Umrah Packages,{`"`} at a highly competitive price of &euro; {pkg.price}. These packages are ideal for budget-conscious pilgrims seeking a shorter Umrah experience. Accommodation is provided in {pkg.rating}-star hotels, with {pkg.makkahNights || defaultProps.madinahNights} nights at {pkg.makkahHotel} in Mecca and {pkg.madinahNights || defaultProps.madinahNights} nights at {pkg.madinahHotel} in Madinah, in quad-sharing rooms. Umrah flights can be added to the package, but services such as Ziarats (tours), breakfast, and transport are not included and can be arranged separately if required.</p>
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

// Server side rendering: Dont use it. Keep this function commented
// export async function getServerSideProps(context) {
//     const { title } = context.query;
//     connectDb()
//     const pkg = await Package.findOne({ title }).lean();

//     if (!pkg) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: { pkg: serializePackages([pkg])[0] }, // Pass package data as props
//     };
// }

// Using static site generation instead of SSR:
export async function getStaticProps({ params }) {
    const { title } = params;
    await connectDb(); // Connect to your database
    try {
        const pkg = await Package.findOne({ title }).lean();
        if (!pkg) {
            return {
                notFound: true,
            };
        }

        return {
            props: { pkg: serializePackages([pkg])[0] }, // Pass package data as props
        };
    } catch (error) {
        console.error('Error fetching package:', error);
        return {
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    await connectDb(); // Connect to your database

    try {
        const allPackages = await Package.find().lean();
        const paths = allPackages.map(pkg => ({ params: { title: pkg.title } }));

        return { paths, fallback: false };
    } catch (error) {
        console.error('Error fetching packages:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
}