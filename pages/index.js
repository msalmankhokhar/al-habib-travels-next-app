import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import connectDb, { serializePackages } from "@/lib/mongoose";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Package from "@/models/Package";
import bgImg from '@/public/img/posters/2.jpg'
import Link from "next/link";
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import Partners from "@/components/Sections/Partners";
import SpecialOffer from "@/components/Sections/SpecialOffer";
import TopBanner from "@/components/TopBanner";
import QueryForm from "@/components/Sections/QueryForm";

export default function Home({ popularPkgs, fourStarPkgs, threeStarPkgs }) {
  return (
    <>
      <Head 
        title={"Al Habib Travel Ltd."}
        desc={"Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"}
      />
      <header className="relative flex flex-col">
        <TopBanner />
        <Navbar />
        {/* <Image decoding="async" fill className="max-w-screen-xl mx-auto" objectFit="cover" objectPosition="center" alt="cover photo hajj" src={bgImg} placeholder="blur"/> */}
        <div id="header-content" className="max-w-screen-lg mx-auto w-full relative aspect-[4/2] flex-1 px-3 flex flex-col items-center justify-center gap-5">
          <Image decoding="async" fill objectFit="cover" objectPosition="center" alt="cover photo hajj" src={bgImg} placeholder="blur" />
        </div>

        {/* <div id="header-content" className="z-10 h-full flex-1 px-3 py-10 flex flex-col items-center justify-center gap-5">
          <div id="header-text-wrapper" className="max-w-xl p-7 sm:p-10 rounded-xl flex flex-col gap-7">
            <p className="tracking-wide header-text font-bold text-4xl text-white">Plan Your Sacred Journey With Our Exclusive Travel Packages</p>
            <p className="tracking-wide header-text font-semibold text-sm text-white">Discover Our Tailored Umrah Packages and Begin Your Spiritual Experience Today</p>
            <Link scroll={false} href={`/#pkg-listing-section`} className="text-center w-min min-w-36 bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Book Now</Link>
          </div>
        </div> */}

      </header>
      <main className="flex flex-col gap-24">

        <div id="query-form-section" className="pt-16 px-3 flex flex-col justify-center items-center gap-5">      
          <h1 className="font-bold brand-blue text-3xl">Package Customization Form</h1>
          <p className="text-gray-500">Fill your travel requirements below. Our team will get back to you</p>
          <QueryForm/>
        </div>

        <div id="youtube-video-section" className="px-5 flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="flex flex-col gap-5 max-w-screen-sm w-full items-center lg:items-start">
            <h1 className="font-bold brand-blue text-3xl">Lets plan your <span className="brand-yellow">Umrah</span> Package</h1>
            <h2 className="font-bold brand-yellow text-xl">{`"Explore Umrah at our official youtube channel"`}</h2>
            <p className="text-gray-500">
              {`Visual guidance is easy to understand, making your journey smoother. We've uploaded Umrah content on Al Habib Travel's official YouTube channel to keep you updated with the latest Umrah Packages. You'll also find guides on how to perform Umrah through easy-to-follow video visuals. Stay informed with all the latest news related to Hajj and Umrah by subscribing to our YouTube channel. If you want to learn more about Hajj and Umrah, click the button below.'`}
            </p>
            <a target="_blank" href="https://www.youtube.com/@alhabibtraveluk" type="button" className="text-center min-w-48 w-min bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Visit YouTube Channel</a>
          </div>
          <iframe id="yt-video-iframe" className="w-full max-w-[600px] rounded-lg" src="https://www.youtube.com/embed/bWLKvCuYM6Q" title="How to perform umrah STEP BY STEP in english" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div id="pkg-listing-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold brand-blue text-3xl">Popular Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {
              popularPkgs.length > 0 ? popularPkgs.map((pkg)=>{
                return <PackageCard key={pkg.title} {...pkg}/>
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div id="four-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold brand-blue text-3xl">4 Star Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
          {
              fourStarPkgs.length > 0 ? fourStarPkgs.map((pkg)=>{
                return <PackageCard key={pkg.title} {... pkg}/>
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div id="three-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold brand-blue text-3xl">3 Star Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
          {
              threeStarPkgs.length > 0 ? threeStarPkgs.map((pkg)=>{
                return <PackageCard key={pkg.title} {... pkg}/>
              }) : (<p className="text-red-500 font-black">No Packages found</p>)
            }
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <SpecialOffer/>

        <Reviews padding={false}/>
        <Faqs padding={false}/>
        <Partners />
      </main>
      <Footer />
    </>
  );
}


// Fetch packages with Static site generation
export async function getStaticProps() {
  await connectDb();
  const packages = await Package.find({type: 'Umrah'}).lean() // fetch all packages
  const popularPkgs = packages.filter(pkg => pkg.rating === 5);
  const fourStarPkgs = packages.filter(pkg => pkg.rating === 4);
  const threeStarPkgs = packages.filter(pkg => pkg.rating === 3);

  return {
    props: {
      popularPkgs : serializePackages(popularPkgs),
      fourStarPkgs : serializePackages(fourStarPkgs),
      threeStarPkgs : serializePackages(threeStarPkgs)
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