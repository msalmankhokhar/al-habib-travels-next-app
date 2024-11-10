import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faGreaterThan, faMapLocationDot, faPhone, faPlaneDeparture, faHeart } from "@fortawesome/free-solid-svg-icons";
import connectDb, { serializePackages } from "@/lib/mongoose";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Package from "@/models/Package";
import bgImg from '@/public/img/ramadan-bg.png'
import Link from "next/link";
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import RamadanFeatureCard from "@/components/RamadanFeatureCard";
import Partners from "@/components/Sections/Partners";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import SpecialOffer from "@/components/Sections/SpecialOffer";

export default function RamadanUmrahPackages({ popularPkgs, fourStarPkgs, threeStarPkgs }) {
  return (
    <>
      <Head
        title={"Al Habib Travels"}
        desc={"Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"}
      />
      <header className="relative flex flex-col bg-pattern-light mb-16">
        <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
          <p className="text-white text-center text-xs xs:text-sm">Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner</p>
        </div>

        <Navbar />

        <div id="header-content" className="max-w-screen-xl mx-auto w-full relative aspect-[4/2] flex-1 px-3 flex flex-col items-center justify-center gap-5">
          <Image decoding="async" fill objectFit="cover" objectPosition="center" alt="cover photo hajj" src={bgImg} placeholder="blur" />
        </div>
      </header>
      <main className="flex flex-col gap-24">

        <div id="pkg-listing-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold brand-blue text-center text-3xl max-w-2xl">Popular Ramadan Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {
              popularPkgs.length > 0 ? popularPkgs.map((pkg) => {
                return <PackageCard imgSrcCustom={'/img/pkgs/ramadan.png'} key={pkg.title} {...pkg} />
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div id="four-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold brand-blue text-3xl text-center">4 Star Ramadan Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {
              fourStarPkgs.length > 0 ? fourStarPkgs.map((pkg) => {
                return <PackageCard imgSrcCustom={'/img/pkgs/ramadan.png'} key={pkg.title} {...pkg} />
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div id="three-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-center brand-blue text-3xl">3 Star Ramadan Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {
              threeStarPkgs.length > 0 ? threeStarPkgs.map((pkg) => {
                return <PackageCard imgSrcCustom={'/img/pkgs/ramadan.png'} key={pkg.title} {...pkg} />
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div className="py-10 px-5 flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold brand-blue text-center text-xl sm:text-3xl max-w-2xl">Perform Umrah in the Holiest Month with Our Ramadan Umrah Packages !</h1>
          <p className="text-sm max-w-4xl text-center mb-5">
            The UK Muslims every wish to perform the Umrah in Ramadan, which is 70 times more reward time. We know that every pilgrim has different needs as such our Ramadan Umrah packages can meet all.
          </p>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            <RamadanFeatureCard icon={faPlaneDeparture} title={'Tailored to your travel needs'} desc={'It works if you are solo, a family, or an agency traveling. Want a certain itinerary, to go from a particular airport, find non-resistant flights? No problem! Whatever tickles your fancy – luxury or budget-friendly hotels; we are here to offer everything including 3-star and 5-star outlets.'} />
            <RamadanFeatureCard icon={faCalendarCheck} title="Flexible Packages for Every Ramadan Schedule" desc="Want to perform Umrah during a specific Ashra (10-day period) or spend Eid al-Fitr while doing Tawaf? We offer packages ranging from 7, 10, 12, or 14-night stays, including packages for the last 10 days of Ramadan. With our all-inclusive options, we take care of your ground transport, meals, and visa assistance, ensuring a hassle-free experience." />
            <RamadanFeatureCard icon={faMapLocationDot} title="Your Journey, Your Way" desc="Don’t see exactly what you’re looking for? We can create a custom Ramadan Umrah package just for you! Give us details important for your travel — what kind of hotels, flights and en-route requirements you have, forget about it. Simply spend a minute or so to fill our no-obligation quote form, if you prefer the convenience of getting it done online, or call 0203 504 2344 for one of our Umrah experts to handle it for you in person." />
            <RamadanFeatureCard icon={faHeart} title="Enjoy a hassle free experience" desc="We take care of your flight bookings and hotel reservations as well as insurance for both your health and finances, down to every detail. Let us ease your way with Al Habib Travel, safe and spiritually satisfactory Umrah journey." />
          </div>
        </div>

        <div className="px-3 py-10 bg-pattern-light flex flex-col gap-3 items-center">
          <h1 className="text-3xl font-bold text-center text-black">Ready for your Journey?</h1>
          <div className="text-sm sm:flex-row sm:text-base text-center flex-wrap items-center gap-2 flex flex-col text-white font-semibold">
            <span>Call Us now at</span>
            <div className="bg-brand-blue p-1 rounded-full flex gap-1.5 items-center">
              <div className="rounded-full h-9 w-9 flex items-center justify-center bg-white">
                <FontAwesomeIcon className="text-black" icon={faPhone} />
              </div>
              <span className="mr-4 ml-1 text-sm font-semibold">0203 504 2344</span>
            </div>
            <span>To plan your perfect Umrah Package</span>
          </div>
        </div>


        <SpecialOffer />

        <Reviews padding={false} />
        <Faqs padding={false} />
        <Partners />
      </main>
      <Footer />
    </>
  );
}


// Fetch packages with Static site generation
export async function getStaticProps() {
  await connectDb();
  const packages = await Package.find({type: "Ramadan"}).lean() // fetch all packages
  const popularPkgs = packages.filter(pkg => pkg.rating === 5);
  const fourStarPkgs = packages.filter(pkg => pkg.rating === 4);
  const threeStarPkgs = packages.filter(pkg => pkg.rating === 3);

  return {
    props: {
      popularPkgs: serializePackages(popularPkgs),
      fourStarPkgs: serializePackages(fourStarPkgs),
      threeStarPkgs: serializePackages(threeStarPkgs)
    },
  };
}

// Fetch packages with Server side rendering
// export async function getServerSideProps() {
//   await connectDb();
//   const packages = await Package.find({}).lean() // fetch all packages
//   const popularPkgs = packages.filter(pkg => pkg.rating === 5);
//   const fourStarPkgs = packages.filter(pkg => pkg.rating === 4);
//   const threeStarPkgs = packages.filter(pkg => pkg.rating === 3);

//   return {
//     props: {
//       popularPkgs : serializePackages(popularPkgs),
//       fourStarPkgs : serializePackages(fourStarPkgs),
//       threeStarPkgs : serializePackages(threeStarPkgs)
//     },
//   };
// }