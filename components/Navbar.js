import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

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
        <nav className="flex px-5 py-3 items-center justify-between bg-white">
            <div className="flex items-end gap-2">
                <div>
                    <Image src="/img/logos/logo.png" alt="al habib travel logo" width={65} height={55} />
                </div>
                <div className="sm:flex mb-1 gap-1 items-baseline leading-none font-bold md:text-xl text-lg brand-blue">
                    <div>AL HABIB</div>
                    <div>TRAVEL.</div>
                </div>
            </div>
            <ul className="gap-5 hidden items-center">
                <li><Link className="text-sm" href="/">Home</Link></li>
                <li><Link className="text-sm" href="#pkg-listing-section">Umrah Packages</Link></li>
                <li><Link className="text-sm" href="#">Hajj Packages</Link></li>
                <li><Link className="text-sm" href="#">Blog</Link></li>
                <li><Link className="text-sm" href="/contact">Contact</Link></li>
                <li><Link className="text-sm" href="#">About Us</Link></li>
            </ul>
            <div id="mobile-menu" className="z-50 fixed flex flex-col top-0 bottom-0 -left-3/4 md:-left-1/3 transition-all duration-300 bg-white w-3/4 md:w-1/3">
                <ul className="flex flex-col mt-10">
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/">Home</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/#pkg-listing-section">Umrah Packages</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="#">Hajj Packages</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="#">Blog</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="/contact">Contact</Link></li>
                    <li className=""><Link onClick={handleLinkClick} className="text-sm block border px-5 py-3 transition-colors duration-200 hover:text-white hover:bg-teal-700" href="#">About Us</Link></li>
                </ul>
            </div>
            <button type="button" onClick={toggleMobileMenu} className="block border rounded-md py-2 px-5">
                <FontAwesomeIcon className="text-xl brand-blue" icon={faBars} />
            </button>
        </nav>
    )
}
