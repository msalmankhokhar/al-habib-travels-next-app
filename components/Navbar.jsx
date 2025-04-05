import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ContactCardNav from "./ContactCardNav";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        isFixed ? "fixed transition-all duration-1000" : ""
      } border-b top-0 z-20 flex py-2 px-5 md:px-7 lg:px-12 items-center justify-between bg-white w-full`}
    >
      <div className="flex items-end gap-2">
        <div>
          <Image
            src="/img/logos/logo.png"
            alt="al habib travel logo"
            width={60}
            height={55}
          />
        </div>
        <Link href="/">
          <div className="sm:flex mb-1 gap-1 items-baseline leading-none font-bold md:text-xl text-lg brand-blue">
            <div>AL HABIB</div>
            <div>TRAVEL UK</div>
          </div>
        </Link>
      </div>
      <ul className="gap-5 hidden items-center">
        <li>
          <Link className="text-sm" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="#pkg-listing-section">
            Umrah Packages
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/ramadan-umrah-packages">
            Ramadan Packages
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/makkah-hotels">
            Makkah Hotels
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/madinah-hotels">
            Makkah Hotels
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/visa">
            Visa
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/about">
            About Us
          </Link>
        </li>
      </ul>
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`z-[1000] fixed flex flex-col py-5 gap-5 top-0 bottom-0 -left-3/4 md:-left-1/3 transition-all duration-300 bg-white w-3/4 md:w-1/3 ${
          isMobileMenuOpen ? 'translate-x-full' : ''
        }`}
      >
        <div className="px-5">
          <Image
            src="/img/logos/logo.png"
            alt="al habib travel logo"
            width={65}
            height={55}
          />
        </div>
        <ul className="flex flex-col">
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/#pkg-listing-section"
            >
              Umrah Packages
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/ramadan-umrah-packages"
            >
              Ramadan Packages
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/makkah-hotels"
            >
              Makkah Hotels
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/madinah-hotels"
            >
              Madinah Hotels
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/visa"
            >
              Visa
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="">
            <Link
              onClick={handleLinkClick}
              className="mobile-menu-link text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700"
              href="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
        <ContactCardNav customClass="block md:hidden px-5" />
        <ContactCardNav
          customClass="block md:hidden px-5"
          title="Call Us Now"
          value="0203 504 2344"
          link="tel:0203 504 2344"
          icon={faPhone}
          color="brand-yellow"
        />
      </div>
      <div className="flex items-center gap-5">
        <ContactCardNav customClass="hidden md:block" />
        <ContactCardNav
          customClass="hidden md:block"
          title="Call Us Now"
          value="0203 504 2344"
          link="tel:0203 504 2344"
          icon={faPhone}
          color="brand-yellow"
        />
        <button
          ref={menuButtonRef}
          type="button"
          onClick={toggleMobileMenu}
          className="block border rounded-md py-2 px-5"
        >
          <FontAwesomeIcon className="text-xl brand-blue" icon={faBars} />
        </button>
      </div>
    </nav>
  );
}