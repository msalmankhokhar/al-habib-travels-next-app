import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
        <footer className="bg-pattern-dark flex flex-col">

            <div className="flex flex-col gap-5 px-5 pt-16 pb-5 md:flex-row md:justify-evenly flex-wrap">

                <div className="flex flex-col gap-5">
                    <h1 className="text-bold font-bold brand-yellow text-base">About us</h1>
                    <p className="text-sm font-light max-w-sm text-white">
                        Al Habib Travel is the most trusted & reliable agency among UK Muslims. We provide bespoke Umrah travel solutions & package designing services to meet budget range and facilities requirements of pilgrims.
                    </p>
                    <div className="flex flex-col gap-2">
                        <Image src={'/img/footer/paymentmethods.png'}width={200} height={30} alt="payment methods logos"/>
                        <Image src={'/img/footer/ministryofhajj.png'}width={200} height={30} alt="payment methods logos"/>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-bold font-bold brand-yellow text-base">Travel</h1>
                    <ul className="flex flex-col gap-1">
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/'}>Home</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/#pkg-listing-section'}>Umrah Packages</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/ramadam-umrah-packages'}>Ramadan Umrah Packages</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/contact'}>Contact</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/about'}>About us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-bold font-bold brand-yellow text-base">Our Terms</h1>
                    <ul className="flex flex-col gap-1">
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Travel Insurance</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Terms and Conditions</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Safi Assurance</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'/privacy-policy'}>Privacy Policy Statement</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Payment Security</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Our Responsibility</Link></li>
                        <li className="leading-none"><Link className="text-sm font-light text-white" href={'#'}>Download</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-bold font-bold brand-yellow text-base text-white">Contact info</h1>
                        <div className="flex flex-col gap-2">
                            <Link className="text-sm font-bold text-white" href={'tel:0203 504 2344'}>0203 504 2344</Link>
                            <Link className="text-sm font-bold text-white" href={'mail:info@alhabibtravel.co.uk'}>info@alhabibtravel.co.uk</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-bold font-bold brand-yellow text-base">Office</h1>
                        <p className="text-sm text-wrap w-fit max-w-sm inline text-white">
                            Office 10378 182-184 High Street <br /> North East Ham London <br /> England E6 2JA
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex md:items-center flex-col gap-5 p-5">
                <Image src={'/img/logos/logo-footer.png'} width={190} height={172} alt="alhabibtravel logo"/>
                <p className="text-sm max-w-screen-md text-white md:text-center">
                <strong>Note:</strong> <span className="font-light">All fares advertised are subject to availability and start from the prices we have mentioned. Fares are only guaranteed until ticketed. Offers may be withdrawn without any prior notice</span>
                </p>
            </div>
            <div className="flex border-t flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5">
                <div className="flex gap-4 items-center">
                    <a target="_blank" href="#" className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-teal-700 hover:text-gray-200 hover:bg-teal-800 transition-colors duration-300">
                        <FontAwesomeIcon icon={faFacebook} className="leading-none text-sm" />
                    </a>
                    <a href="#" className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-teal-700 hover:text-gray-200 hover:bg-teal-800 transition-colors duration-300">
                        <FontAwesomeIcon icon={faInstagram} className="leading-none text-sm" />
                    </a>
                    <a href="https://www.youtube.com/@alhabibtraveluk" className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-teal-700 hover:text-gray-200 hover:bg-teal-800 transition-colors duration-300">
                        <FontAwesomeIcon icon={faYoutube} className="leading-none text-sm" />
                    </a>
                </div>
                <div className="text-white text-sm">
                    Copyright &copy; 2024 | Al Habib Travel Ltd.
                </div>
            </div>
            <div className="bg-white px-4 py-4">
                <p className="text-xs font-light">
                    Most/Many of the flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Some of the flights on this website are also financially protected by the ATOL scheme, but ATOL protection does not apply to all flights.
                </p>
            </div>
        </footer>
        </>
    )
}
