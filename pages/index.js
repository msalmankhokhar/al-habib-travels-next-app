import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import connectDb, { serializePackages } from "@/lib/mongoose";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Package from "@/models/Package";
import bgImg from "@/public/img/posters/3.jpg";
import Link from "next/link";
import Reviews from "@/components/Sections/Reviews";
import Faqs from "@/components/Sections/Faqs";
import Partners from "@/components/Sections/Partners";
import SpecialOffer from "@/components/Sections/SpecialOffer";
import TopBanner from "@/components/TopBanner";
import QueryForm from "@/components/Sections/QueryForm";
import QueryFormNew from "@/components/QueryFormNew";

export default function Home({ popularPkgs, fourStarPkgs, threeStarPkgs }) {
  return (
    <>
      <Head
        title={"Al Habib Travel Ltd."}
        desc={
          "Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK"
        }
      />
      <header className="relative flex flex-col">
        <TopBanner />
        <Navbar />
        {/* <Image decoding="async" fill className="max-w-screen-xl mx-auto" objectFit="cover" objectPosition="center" alt="cover photo hajj" src={bgImg} placeholder="blur"/> */}
        <div
          id="header-content"
          className="w-full relative aspect-[4/2] flex-1 px-3 flex flex-col items-center justify-center gap-5"
        >
          <Image
            decoding="async"
            fill
            objectFit="cover"
            objectPosition="center"
            alt="cover photo hajj"
            src={bgImg}
            placeholder="blur"
          />
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
        <div
          id="query-form-section"
          className="pt-16 px-3 flex flex-col justify-center items-center gap-5"
        >
          <h1 className="font-bold brand-blue text-3xl">
            Package Customization Form
          </h1>
          <p className="text-gray-500">
            Fill your travel requirements below. Our team will get back to you
          </p>
          <QueryFormNew />
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
          <iframe
            id="yt-video-iframe"
            className="w-full max-w-[600px]"
            src="https://www.youtube.com/embed/PP2JlHwupqE?si=jvieRT0a5MDbCmze"
            title="Cheapest Umrah Package from United Kingdom (UK)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div
          id="pkg-listing-section"
          className="px-5 flex flex-col justify-center items-center gap-5"
        >
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
        </div>

        <SpecialOffer />

        <Reviews padding={false} />
        <Faqs padding={false} questions={questions}/>
        <Partners />
      </main>
      <Footer />
    </>
  );
}

// Fetch packages with Static site generation
export async function getStaticProps() {
  await connectDb();
  
  var packages = await Package.find({}).lean(); // fetch all packages
  var popularPkgs = packages.filter((pkg) => pkg.rating === 5);
  var fourStarPkgs = packages.filter((pkg) => pkg.rating === 4);
  var threeStarPkgs = packages.filter((pkg) => pkg.rating === 3);
  var packages = await Package.find({type: 'Umrah'}).lean() // fetch all packages
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

const questions = [
  {
    q: `What is the baggage allowance for my flight?`,
    a: `The first checked baggage is included in all our packages. You're allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.`
  },
  {
    q: `What is your refund policy in case of cancellation?`,
    a: `Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.`
  },
  {
    q: `Will you provide assistance if I face any issues during my trip?`,
    a: `Absolutely, we're here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.`
  },
  {
    q: `Will I be traveling with a group, or is it an individual package?`,
    a: `We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we'll arrange accordingly.`
  },
  {
    q: `Are there any discounts for families or groups?`,
    a: `Yes, we're pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we'll provide a customized package for you.`
  },
  {
    q: `Can you assist with wheelchair services or other accessibility needs?`,
    a: `Of course! We understand the importance of accessibility. We’ll arrange wheelchair services for your flights and during your stay in both Makkah and Madinah. Please let us know your specific requirements, and we'll ensure they're taken care of.`
  },
  {
    q: `Do you offer installment plans or flexible payment options?`,
    a: `Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we'll guide you through the process.`
  },
  {
    q: `What type of transport will be provided (e.g., private car, group bus)?`,
    a: `We offer comfortable private transport tailored to your group size. For smaller groups of 2-3 people, we provide private cars. For 4-5 people, we arrange H-1 vans. Larger groups of 6-8 people will have a Hiace, and for groups of more than 9, we offer a spacious minibus. You can trust us to make your journey comfortable and hassle-free.`
  }
]