import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import ContactCardNav from './ContactCardNav'

export default function Navbar() {
    const toggleMobileMenu = () => {
        document.getElementById('mobile-menu').classList.toggle('open')
    }
    const closeMobileMenu = (event) => {
        document.getElementById('mobile-menu').classList.remove('open')
    }
    const openMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.add('open')
    }
    const handleLinkClick = () => {
        closeMobileMenu()
    }

    return (
        <nav className="border-b z-20 flex py-3 px-5 md:px-7 lg:px-12 items-center justify-between bg-white">
            <div className="flex items-end gap-2">
                <div>
                    <Image src="/img/logos/logo.png" alt="al habib travel logo" width={65} height={55} />
                </div>
                <div className="sm:flex mb-1 gap-1 items-baseline leading-none font-bold md:text-xl text-lg brand-blue">
                    <div>Al Habib</div>
                    <div>Travel</div>
                </div>
            </div>
            <ul className="gap-5 hidden items-center">
                <li><Link className="text-sm" href="/">Home</Link></li>
                <li><Link className="text-sm" href="#pkg-listing-section">Umrah Packages</Link></li>
                <li><Link className="text-sm" href="/ramadam-umrah-packages">Ramadan Packages</Link></li>
                <li><Link className="text-sm" href="/makkah-hotels">Makkah Hotels</Link></li>
                <li><Link className="text-sm" href="/madinah-hotels">Makkah Hotels</Link></li>
                <li><Link className="text-sm" href="/visa">Visa</Link></li>
                <li><Link className="text-sm" href="/contact">Contact</Link></li>
                <li><Link className="text-sm" href="/about">About Us</Link></li>
            </ul>
            <div id="mobile-menu" className="z-[1000] fixed flex flex-col py-5 gap-5 top-0 bottom-0 -left-3/4 md:-left-1/3 transition-all duration-300 bg-white w-3/4 md:w-1/3">
                <div className='px-5'>
                    <Image src="/img/logos/logo.png" alt="al habib travel logo" width={65} height={55} />
                </div>
                <ul className="flex flex-col">
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/">Home</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/#pkg-listing-section">Umrah Packages</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/ramadam-umrah-packages">Ramadan Packages</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/makkah-hotels">Makkah Hotels</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/madinah-hotels">Madinah Hotels</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/visa">Visa</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/contact">Contact</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/about">About Us</Link></li>
                </ul>
                <ContactCardNav customClass='block md:hidden px-5'/>
                <ContactCardNav
                    customClass='block md:hidden px-5'
                    title='Call Us Now'
                    value='0203 504 2344'
                    link='tel:0203 504 2344'
                    icon={faPhone}
                    color='brand-yellow'
                />
            </div>
            <div className="flex items-center gap-5">
                <ContactCardNav customClass='hidden md:block'/>
                <ContactCardNav
                    customClass='hidden md:block'
                    title='Call Us Now'
                    value='0203 504 2344'
                    link='tel:0203 504 2344'
                    icon={faPhone}
                    color='brand-yellow'
                />
                <button type="button" onClick={toggleMobileMenu} className="block border rounded-md py-2 px-5">
                    <FontAwesomeIcon className="text-xl brand-blue" icon={faBars} />
                </button>
            </div>
        </nav>
    )
}
