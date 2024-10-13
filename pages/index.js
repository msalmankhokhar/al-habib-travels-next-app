import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const toggleMobileMenu = ()=>{
    document.getElementById('mobile-menu').classList.toggle('open')
  }
  return (
    <>
    <Head>
      <title>Al Habib Travel</title>
      <meta name="description" content="Welcome to Al Habib Travel | Your Trusted Hajj and Umrah Partner in UK" />
      <meta property="og:image" content="https://al-habib-travels-next-app.vercel.app/img/ogimage1.png" />
    </Head>
    <header className="min-h-screen flex flex-col">
      <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
        <p className="text-white text-center text-xs xs:text-sm">Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner</p>
      </div>

      <nav className="flex px-5 py-3 items-center justify-between bg-white">
        <div className="flex items-end gap-2">
          <div>
            <Image src="/img/logos/logo.png" alt="al habib travel logo" width={55} height={55}/>
          </div>
          <div className="sm:flex hidden mb-2 gap-1 items-baseline leading-none font-bold text-lg brand-blue">
            <div>Al HABIB</div>
            <div className="text-sm text-slate-600">TRAVEL</div>
          </div>
        </div>
        <ul className="md:flex gap-5 hidden items-center">
          <li><a className="text-sm" href="#">Home</a></li>
          <li><a className="text-sm" href="#">Umrah Packages</a></li>
          <li><a className="text-sm" href="#">Hajj Packages</a></li>
          <li><a className="text-sm" href="#">Blog</a></li>
          <li><a className="text-sm" href="#">Contact</a></li>
          <li><a className="text-sm" href="#">About Us</a></li>
        </ul>
        <div id="mobile-menu" className="fixed md:hidden flex flex-col top-0 bottom-0 -left-3/4 transition-all duration-300 bg-white w-3/4">
          <ul className="flex flex-col mt-10">
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">Home</a></li>
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">Umrah Packages</a></li>
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">Hajj Packages</a></li>
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">Blog</a></li>
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">Contact</a></li>
            <li className="w-full border px-5 py-3"><a className="text-sm" href="#">About Us</a></li>
          </ul>
        </div>
        <button type="button" onClick={toggleMobileMenu} className="md:hidden block border rounded-md py-2 px-5">
          <FontAwesomeIcon className="text-xl brand-blue" icon={faBars}/>
        </button>
      </nav>

      <div id="header-content" className="h-full flex-1 px-5 py-5 flex flex-col gap-5 items-center justify-center">
        <p className="text-center tracking-wide leading-snug header-text font-bold text-5xl text-white">Let{"'"}s plan your Holy moments<br/> with our travel packages</p>
      </div>
    </header>
    <main className="my-16 flex flex-col gap-24">

      <div id="query-form-section" className="px-5 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold brand-blue text-3xl">Package Customization Form</h1>
        <p className="text-gray-500">Fill your travel requirements below. Our team will get back to you</p>
        <form action="" className="mt-5 w-full max-w-screen-lg flex flex-col gap-3">
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name-input" className="text-sm">Your Full Name*</label>
              <input id="name-input" type="text" className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full border text-sm transition-all duration-300" placeholder="Your Name" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name-input" className="text-sm">Email*</label>
              <input type="email" className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full w-full border text-sm transition-all duration-300" placeholder="Email" />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm">Phone Number</label>
                <input type="tel" className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full w-full border text-sm transition-all duration-300" placeholder="Phone" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name-input" className="text-sm">Number of People*</label>
              <input type="number" className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full w-full border text-sm transition-all duration-300" placeholder="No. of People" />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name-input" className="text-sm">Month of Departure*</label>
              <select className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                <option value="" selected>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name-input" className="text-sm">Departure Airport</label>
              <select className="p-3 focus:outline-none ring-transparent ring-2 focus:ring-yellow-400 rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                <option value="" selected>Select Airport</option>
                <option value="January">London International Airport</option>
                <option value="February">UK Airport</option>
              </select>
            </div>
          </div>
          <button type="button" className="bg-teal-900 min-w-36 hover:bg-teal-800 transition-colors duration-300 text-sm p-3 text-white rounded-full">Submit Now</button>
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
          <PackageCard/>
          <PackageCard/>
          <PackageCard/>
        </div>
        <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button>
      </div>

      <div id="four-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold brand-blue text-3xl">4 Star Packages</h1>
        <div className="pkg-container flex flex-wrap gap-5 justify-center">
          <PackageCard/>
          <PackageCard/>
          <PackageCard/>
        </div>
        <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button>
      </div>

      <div id="four-star-section" className="px-5 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold brand-blue text-3xl">3 Star Packages</h1>
        <div className="pkg-container flex flex-wrap gap-5 justify-center">
          <PackageCard/>
          <PackageCard/>
          <PackageCard/>
        </div>
        <button type="button" className="min-w-36 w-min border bg-gray-100 hover:bg-white transition-colors duration-300 text-sm p-3 rounded-full">Load More</button>
      </div>

      <div id="special-offer-section" className="px-5 py-16 flex flex-col items-center lg:flex-row gap-5 justify-around bg-teal-900">
        <div className="flex flex-col gap-5 max-w-screen-sm w-full">
          <h1 className="font-bold text-3xl text-white">Special Offers</h1>
          <h2 className="font-bold brand-yellow text-xl">{`"Unlock special offers on your Hajj and Umrah Journey"`}</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque optio labore temporibus. Aperiam dolorem molestiae nihil officiis error dolor. Nobis ea qui assumenda quisquam facere perspiciatis ab, commodi veritatis aperiam molestias vel quia voluptate fugiat voluptatem excepturi! Dolores, quibusdam! Nobis vel dolores excepturi qui quisquam aperiam at distinctio, eaque unde alias aliquam omnis minus fuga.
          </p>
          <button type="button" className="font-semibold min-w-36 w-min bg-white text-teal-900 hover:text-teal-700 transition-colors duration-300 text-sm p-3 rounded-full">Book Now</button>
        </div>
        <Image src={'/img/favBg.jpg'} width={550} height={550} className="rounded-md" alt="hajj crowd"/>
      </div>
    </main>
    </>
  );
}
