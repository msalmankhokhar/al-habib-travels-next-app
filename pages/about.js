import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function about() {
    return (
        <>
        <Head
        title={'About Us | Al Habib Travel Ltd.'}
        desc={`At Al Habib Travel, we offer complete Hajj and Umrah packages, including flights, visas, hotels, and ground transport. We have packages for every budget and provide 24/7 support to make your journey smooth. What makes us different is that we don't just handle bookings. We guide and educate pilgrims through our social media, YouTube, and local events, helping you feel prepared and confident.`}
        />
        <Navbar />
        <main className='px-5 md:px-7 lg:px-12 pt-10 max-w-screen-lg mx-auto'>
            <h1 className='font-bold mb-5 text-2xl brand-yellow'>About Us | Al Habib Travel Ltd</h1>

            <div className="mb-5">
                <h1 className='font-bold text-lg mb-3 brand-blue'>Our Services</h1>
                <p className='text-slate-700'>
                    At Al Habib Travel, we offer complete Hajj and Umrah packages, including flights, visas, hotels, and ground transport. We have packages for every budget and provide 24/7 support to make your journey smooth. What makes us different is that we don’t just handle bookings—we guide and educate pilgrims through our social media, YouTube, and local events, helping you feel prepared and confident
                </p>
            </div>

            <div className="mb-5">
                <h1 className='font-bold text-lg mb-3 brand-blue'>Our Mission and Vision</h1>
                <p className='text-slate-700'>
                    Our mission is to make Hajj and Umrah affordable, easy, and fulfilling. We understand the importance of trust and are committed to delivering on our promises. Looking to the future, we aim to bring even more digital services to make booking and planning simpler for all pilgrims.
                </p>
            </div>

            <div className="mb-5">
                <h1 className='font-bold text-lg mb-3 brand-blue'>Our Brand</h1>
                <p className='text-slate-700'>
                    Our team is passionate about helping Muslims complete their sacred journey. Many of us have performed Hajj or Umrah ourselves, so we understand the importance of every detail. Our multilingual team is available 24/7 to support you and make your experience as smooth as possible.i
                </p>
            </div>

            <div className="mb-5">
                <h1 className='font-bold text-lg mb-3 brand-blue'>Our Achievements</h1>
                <p className='text-slate-700'>
                    Al Habib Travel has helped thousands of pilgrims from around the world. Our clients trust us for reliability and honesty. We’re also active on YouTube and social media, sharing helpful tips and information for Umrah and Hajj. We are proud to be a trusted name in Umrah and Hajj services.
                </p>
            </div>

            <div className="">
                <h1 className='font-bold text-lg mb-3 brand-blue'>Al Habib Travel—Your Journey, Our Privilege</h1>
                <p className='text-slate-700'>
                    Let us handle the details so you can focus on your faith. We’re here to serve you from the heart, making your journey memorable and peaceful.
                </p>
            </div>

        </main>
        <Footer />
        </>
    )
}
