import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import connectDb, { serializePackages } from "@/lib/mongoose";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Package from "@/models/Package";
import bgImg from "@/public/img/bg.png"; // Background image
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import Partners from "@/components/Sections/Partners";
import SpecialOffer from "@/components/Sections/SpecialOffer";
import TopBanner from "@/components/TopBanner";
import BgOverlay from "@/components/BgOverlay";
import QueryFormNew from "@/components/QueryFormNew";
import Link from "next/link";

export default function Home({ popularPkgs, fourStarPkgs, threeStarPkgs }) {
  return (
    <>
      <Head
        title={"Al Habib Travel UK"}
        desc={
          "Al Habib Travel is the most trusted & reliable agency among UK Muslims. We provide bespoke Umrah travel solutions & package designing services to meet budget range and facilities requirements of pilgrims."
        }
      />
      <header className="relative flex flex-col">
        <TopBanner />
        <Navbar />
        <Image decoding="async" fill className="max-w-screen-xl mx-auto" objectFit="cover" objectPosition="center" alt="cover photo hajj" src={bgImg} placeholder="blur" />

        {/* Old header start */}
        {/* <div
          id="header-content"
          className="bg-pattern-dark w-full relative flex-1 px-3 sm:px-5 flex flex-col items-center justify-center gap-5"
        >
          <div className="relative -bottom-8 right-0 left-0 w-[90vw] md:w-[80vw] aspect-[8/3] border border-gray-700 rounded-xl overflow-hidden">
            <Image
              fill
              decoding="async"
              alt="cover photo hajj"
              src={bgImg}
              placeholder="blur"
              className="rounded-xl"
            />
          </div>
        </div> */}
        {/* Old header end */}

        {/* New header */}
        {/* <div className="bg-white">
          <div
            id="header-content"
            className="shadow-md shadow-teal-800/70 bg-[#E1F4F5] overflow-hidden relative w-full py-16 rounded-b-[50px] sm:rounded-b-[90px] flex-1 px-3 sm:px-5 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0">
              <Image
                alt="background image"
                src={'/img/bg-header-saad.png'}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="opacity-10"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-[#00454A] text-center mb-8">All Inclusive Umrah Packages with Guided Tour</h1>
              <p className="text-[#00454A] mb-3 max-w-md text-center">
                All packages include flights, visa processing,
                accommodation near Haram, ground transport,
                and a guided tour. Meals are optional.
              </p>
              <Image
                alt="arrow"
                src={'/assets/arrow.svg'}
                width={50}
                height={50}
                className="relative left-[120px] top-[10px]"
              />
              <Link 
                href={'#query-form-section'} 
                className="text-sm cursor-pointer text-white font-semibold bg-[#D4A10F] hover:bg-[#c29414] transition-colors px-4 py-2.5 rounded-full"
              >
                Get Quote - It&apos;s free
              </Link>
            </div>
          </div>
        </div> */}


        <div id="header-content" className="z-10 h-full flex-1 px-3 py-10 flex flex-col items-center justify-center gap-5">
          <div id="header-text-wrapper" className="max-w-xl p-7 sm:p-10 rounded-xl flex flex-col items-center gap-7">
            <p className="tracking-wide header-text font-bold text-4xl text-white text-center">All Inclusive Umrah Packages with Guided Tour</p>
            <p className="tracking-wide header-text text-white text-center">All packages include flights, visa processing, accommodation near Haram, ground transport, and a guided tour. Meals are optional.</p>
            <Link scroll={false} href={`/#pkg-listing-section`} className="text-center min-w-36 bg-brand-primary font-semibold transition-colors duration-300 text-sm p-3 text-white rounded-full">Get Quote - It&apos;s free</Link>
          </div>
        </div>

      </header>

      <main className="flex flex-col gap-24 bgOverlay">
        <BgOverlay />

        {/* Text section */}
        <div className="mt-16 px-5 sm:px-7 flex flex-col items-center">
          <h1 className="max-w-screen-lg text-center text-3xl font-semibold mb-5 text-brand-primary-600">As Londener Muslim, head to Umrah from your backyard at any time of 2025 in your own style with Umrah Packages from London</h1>
          <p className="max-w-screen-lg text-center">Holidays! Serene weather! Sacred months! Off-peak season! When it comes to booking an Umrah tour from London, we know every Londener Muslim has unique preferences - so we&apos;ve designed a collection of Umrah Packages from London with you in mind. December Umrah Packages, Ester Umrah Packages, Ramadan Umrah Packages, Shaban Umrah Packages, Umrah Packages after Hajj, Summer Umrah Packages, Winter Umrah Packages and November Umrah Packages.</p>
        </div>

        <div
          id="query-form-section"
          className="px-3 flex flex-col justify-center items-center gap-5"
        >
          <QueryFormNew />
        </div>

        {/* Text section */}
        <div className="px-5 sm:px-7 flex flex-col items-center">
          <h1 className="max-w-screen-lg text-center text-3xl font-semibold mb-5 text-brand-primary-600">Cheap Umrah Packages with Flights From USA 2025</h1>
          <p className="max-w-screen-lg text-center">
            For the people looking to embark on this beautiful journey of visiting the Holy Place of Allah, our company has come up with a number of options to opt for. With each package having a different level of amenities provided to the customers. <Link href="/#" className="text-blue-500">Read more</Link>
          </p>
        </div>

        <div
          id="youtube-video-section"
          className="px-5 flex flex-col lg:flex-row gap-5 justify-center items-center"
        >
          <div className="flex flex-col gap-5 max-w-screen-sm w-full items-center lg:items-start">
            <h1 className="font-bold brand-blue text-3xl">
              Lets plan your <span className="brand-yellow">Umrah</span> Package
            </h1>
            <h2 className="font-bold brand-yellow text-xl">{`"Explore Umrah at our official youtube channel"`}</h2>
            <p className="text-gray-500">
              {`At Al Habib Travel, we believe in more than just booking your Umrah trip — we’re here to guide you every step of the way. Whether you’re planning for the perfect Umrah package or choosing the right dates for your journey, we’ve got you covered. Our YouTube channel is your trusted resource, offering expert advice on how to select the best packages, what to expect during your trip, and insider tips on the best times to travel.
              We understand how important this journey is, and we want you to feel confident and supported. Ready to learn more? Watch our video now and take the first step towards a blessed Umrah journey.'`}
            </p>
            {/* <button
              type="button"
              className="min-w-36 w-min bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full"
            >
              Watch Now
            </button> */}
            <a target="_blank" href="https://www.youtube.com/@alhabibtraveluk" type="button" className="text-center min-w-48 w-min bg-teal-900 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Visit YouTube Channel</a>
          </div>
          {/* <iframe
            id="yt-video-iframe"
            className="w-full max-w-[600px] rounded-xl"
            src="https://www.youtube.com/embed/PP2JlHwupqE?si=jvieRT0a5MDbCmze"
            title="Cheapest Umrah Package from United Kingdom (UK)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <video
            src="/vid/yt-video-section.mp4"
            autoPlay loop controls
            className="w-full max-w-[400px] rounded-xl"
          ></video>
        </div>

        <div
          id="pkg-listing-section"
          className="px-5 flex flex-col justify-center items-center gap-5"
        >

          {/* Text section */}
          <div className="px-5 mt-5 sm:px-7 flex flex-col items-center">
            <p className="max-w-screen-lg text-center">
            People who dream to take a trip to Saudia Arabia in order to visit the Kabba and perform Umrah try their level best to choose an option that would give them maximum comfort. As the whole procedure of performing Umrah is itself a difficult one, they try to dig deep while searching for the right, <Link href="/#" className="text-blue-500">Read more</Link>
            </p>
          </div>
          <h1 className="font-bold brand-blue text-3xl">Popular Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {popularPkgs.length > 0 ? (
              popularPkgs.map((pkg) => {
                return <PackageCard key={pkg.title} {...pkg} />;
              })
            ) : (
              <p className="text-red-500 font-black">No Packages found</p>
            )}
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
        </div>

        <div
          id="four-star-section"
          className="px-5 flex flex-col justify-center items-center gap-5"
        >
          <h1 className="font-bold brand-blue text-3xl">4 Star Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {fourStarPkgs.length > 0 ? (
              fourStarPkgs.map((pkg) => {
                return <PackageCard key={pkg.title} {...pkg} />;
              })
            ) : (
              <p className="text-red-500 font-black">No Packages found</p>
            )}
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
          {/* Text section */}
          <div className="px-5 mt-5 sm:px-7 flex flex-col items-center">
            <p className="max-w-screen-lg text-center">
              The economy umrah package offered by the company to its customers comes with three special offers; five days package, seven days package and the double room package. Each particular offer and package comes with its own significant facilities. By paying merely an amount of 69$ per night, <Link href="/#" className="text-blue-500">Read more</Link>
            </p>
          </div>
        </div>

        <div
          id="three-star-section"
          className="px-5 flex flex-col justify-center items-center gap-5"
        >
          <h1 className="font-bold brand-blue text-3xl">3 Star Packages</h1>
          <div className="pkg-container flex flex-wrap gap-5 justify-center">
            {threeStarPkgs.length > 0 ? (
              threeStarPkgs.map((pkg) => {
                return <PackageCard key={pkg.title} {...pkg} />;
              })
            ) : (
              <p className="text-red-500 font-black">No Packages found</p>
            )}
          </div>
          {/* <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button> */}
          {/* Text section */}
          <div className="px-5 mt-5 sm:px-7 flex flex-col items-center">
            <p className="max-w-screen-lg text-center">
            Silver umrah package contains special package deal options from which the customers can choose whatever comes within their budget. These USA Umrah packages 2025 also come in three options including the 5 nights stay, 7 nights stay and the 10 nights stay. While opting for the first option, <Link href="/#" className="text-blue-500">Read more</Link>
            </p>
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
  const connectionStatus = await connectDb();
  if (!connectionStatus) {
    return {
      props: {
        popularPkgs: [],
        fourStarPkgs: [],
        threeStarPkgs: [],
      }
    }
  }

  var packages = await Package.find({}).lean(); // fetch all packages
  var popularPkgs = packages.filter((pkg) => pkg.rating === 5);
  var fourStarPkgs = packages.filter((pkg) => pkg.rating === 4);
  var threeStarPkgs = packages.filter((pkg) => pkg.rating === 3);
  var packages = await Package.find({ type: 'Umrah' }).lean() // fetch all packages
  var popularPkgs = packages.filter(pkg => pkg.rating === 5);
  var fourStarPkgs = packages.filter(pkg => pkg.rating === 4);
  var threeStarPkgs = packages.filter(pkg => pkg.rating === 3);

  return {
    props: {
      popularPkgs: serializePackages(popularPkgs),
      fourStarPkgs: serializePackages(fourStarPkgs),
      threeStarPkgs: serializePackages(threeStarPkgs),
    }
  }
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