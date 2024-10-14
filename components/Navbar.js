import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const toggleMobileMenu = () => {
        document.getElementById('mobile-menu').classList.toggle('open')
    }
    const openMobileMenu = () => {
        document.getElementById('mobile-menu').classList.add('open')
    }
    const closeMobileMenu = () => {
        document.getElementById('mobile-menu').classList.remove('open')
    }

    return (
        <nav className="flex px-5 py-3 items-center justify-between bg-white">
            <div className="flex items-end gap-2">
                <div>
                    <Image src="/img/logos/logo.png" alt="al habib travel logo" width={55} height={55} />
                </div>
                <div className="sm:flex hidden gap-1 items-baseline leading-none font-bold text-xl brand-blue">
                    <div>Al HABIB</div>
                    <div className="text-sm text-slate-600">TRAVEL</div>
                </div>
            </div>
            <ul className="md:flex gap-5 hidden items-center">
                <li><Link className="text-sm" href="/">Home</Link></li>
                <li><Link className="text-sm" href="#pkg-listing-section">Umrah Packages</Link></li>
                <li><Link className="text-sm" href="#">Hajj Packages</Link></li>
                <li><Link className="text-sm" href="#">Blog</Link></li>
                <li><Link className="text-sm" href="#">Contact</Link></li>
                <li><Link className="text-sm" href="#">About Us</Link></li>
            </ul>
            <div id="mobile-menu" className="z-50 fixed md:hidden flex flex-col top-0 bottom-0 -left-3/4 transition-all duration-300 bg-white w-3/4">
                <ul className="flex flex-col mt-10">
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="/">Home</Link></li>
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="/#pkg-listing-section">Umrah Packages</Link></li>
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="#">Hajj Packages</Link></li>
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="#">Blog</Link></li>
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="#">Contact</Link></li>
                    <li className="w-full border px-5 py-3"><Link className="text-sm" href="#">About Us</Link></li>
                </ul>
            </div>
            <button type="button" onFocus={openMobileMenu}onBlur={closeMobileMenu} onClick={toggleMobileMenu} className="md:hidden block border rounded-md py-2 px-5">
                <FontAwesomeIcon className="text-xl brand-blue" icon={faBars} />
            </button>
        </nav>
    )
}
