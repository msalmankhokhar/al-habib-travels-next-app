import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import connectDb, { serializePackages } from "@/lib/mongoose";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Package from "@/models/Package";
import bgImg from '@/public/img/bg.png'
import Link from "next/link";

export default function Home({ popularPkgs, fourStarPkgs, threeStarPkgs }) {
  return (
    <>
      <Head 
        title={"Al Habib Travels"}
        desc={"Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"}
      />
      <header className="relative flex flex-col">
        <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
          <p className="text-white text-center text-xs xs:text-sm">Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner</p>
        </div>

        <Navbar />
        <Image decoding="async" fill className="-z-50" objectFit="cover" objectPosition="center"alt="cover photo hajj" src={bgImg} placeholder="blur"/>

        <div id="header-content" className="h-full flex-1 px-3 py-10 flex flex-col items-center justify-center gap-5">
          <div id="header-text-wrapper" className="max-w-xl p-7 sm:p-10 rounded-xl flex flex-col gap-7">
            <p className="tracking-wide header-text font-bold text-4xl text-white">Plan Your Sacred Journey With Our Exclusive Travel Packages</p>
            <p className="tracking-wide header-text font-semibold text-sm text-white">Discover Our Tailored Umrah Packages and Begin Your Spiritual Experience Today</p>
            <Link scroll={false} href={`#`} className="text-center w-min min-w-36 bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Book Now</Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-24">

        <div id="query-form-section" className="pt-16 px-3 flex flex-col justify-center items-center gap-5">      
          <h1 className="font-bold brand-blue text-3xl">Package Customization Form</h1>
          <p className="text-gray-500">Fill your travel requirements below. Our team will get back to you</p>
          <form className="bg-pattern bg-teal-900 relative px-5 sm:px-10 py-10 rounded-xl border mt-5 w-full max-w-screen-lg flex flex-col gap-3">
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Your Full Name*</label>
                <input id="name-input" type="text" className="p-3 focus:outline-none rounded-full border text-sm transition-all duration-300" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Email*</label>
                <input type="email" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Email" />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Phone Number</label>
                <input type="tel" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Phone" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Number of People*</label>
                <input type="number" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="No. of People" />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Month of Departure*</label>
                <select className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                  <option value="" selected>Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Departure Airport</label>
                <select className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                  <option value="" selected>Select Airport</option>
                  <option value="January">London International Airport</option>
                  <option value="February">UK Airport</option>
                </select>
              </div>
            </div>
            <button type="button" className="btn relative flex justify-center bg-white text-teal-800 hover:text-teal-700 font-semibold mt-3 min-w-36 hover:bg-gray-50 transition-colors duration-300 text-sm p-4 rounded-full">
              <span className="leading-none">Submit Now</span>
              <FontAwesomeIcon icon={faArrowRight} className="btn-arrow leading-none absolute"></FontAwesomeIcon>
            </button>
          </form>
        </div>

        <div id="youtube-video-section" className="px-5 flex flex-col lg:flex-row gap-5 justify-around">
          <div className="flex flex-col gap-5 max-w-screen-sm w-full">
            <h1 className="font-bold brand-blue text-3xl">Lets plan your <span className="brand-yellow">Umrah</span> Package</h1>
            <h2 className="font-bold brand-yellow text-xl">{`"Explore Umrah at our official youtube channel"`}</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque optio labore temporibus. Aperiam dolorem molestiae nihil officiis error dolor. Nobis ea qui assumenda quisquam facere perspiciatis ab, commodi veritatis aperiam molestias vel quia voluptate fugiat voluptatem excepturi! Dolores, quibusdam! Nobis vel dolores excepturi qui quisquam aperiam at distinctio, eaque unde alias aliquam omnis minus fuga dolore, fugiat nostrum error debitis aut consequuntur, eligendi cumque quidem! Animi veritatis possimus numquam in repellendus accusantium aliquid neque.
            </p>
            <button type="button" className="min-w-36 w-min bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Watch Now</button>
          </div>
          <iframe id="yt-video-iframe" className="w-full" src="https://www.youtube.com/embed/bWLKvCuYM6Q" title="How to perform umrah STEP BY STEP in english" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

        <div id="special-offer-section" className="bg-pattern px-5 py-16 flex flex-col items-center lg:flex-row gap-5 justify-around bg-teal-900">
          <div className="flex flex-col gap-5 max-w-screen-sm w-full">
            <h1 className="font-bold text-3xl text-white">Special Offers</h1>
            <h2 className="font-bold brand-yellow text-xl">{`"Unlock special offers on your Hajj and Umrah Journey"`}</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque optio labore temporibus. Aperiam dolorem molestiae nihil officiis error dolor. Nobis ea qui assumenda quisquam facere perspiciatis ab, commodi veritatis aperiam molestias vel quia voluptate fugiat voluptatem excepturi! Dolores, quibusdam! Nobis vel dolores excepturi qui quisquam aperiam at distinctio, eaque unde alias aliquam omnis minus fuga.
            </p>
            <button type="button" className="font-semibold min-w-36 w-min bg-white text-teal-900 hover:text-teal-700 transition-colors duration-300 text-sm p-3 rounded-full">Book Now</button>
          </div>
          <Image src={'/img/favBg.jpg'} width={550} height={550} className="rounded-md" alt="hajj crowd" />
        </div>
      </main>
      <Footer />
    </>
  );
}


// Fetch packages with Static site generation
export async function getStaticProps() {
  await connectDb();
  const packages = await Package.find({}).lean() // fetch all packages
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