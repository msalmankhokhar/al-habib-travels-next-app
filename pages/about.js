import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function about() {
    return (
        <>
        <Head
        title={'About Us | Al Habib Travel Ltd.'}
        desc={''}
        />
        <Navbar />
        <main className='px-5 md:px-7 lg:px-12 py-10'>
            <h1 className='font-bold mb-5 text-4xl'>About Us</h1>
            <p className='text-base mb-3 text-slate-700'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet, ut quam dolore eius animi dolor numquam voluptatum sapiente maxime ducimus fuga illum, aliquid officiis mollitia eos sed. Dolore debitis fuga magni adipisci consequatur reiciendis molestiae iusto, sint culpa? Voluptatem perferendis quod unde numquam nobis, mollitia laborum, praesentium impedit dolorem iste, corrupti odit facilis veritatis!
            </p>
            <p className='text-base mb-3 text-slate-700'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet, ut quam dolore eius animi dolor numquam voluptatum sapiente maxime ducimus fuga illum, aliquid officiis mollitia eos sed. Dolore debitis fuga magni adipisci consequatur reiciendis molestiae iusto, sint culpa? Voluptatem perferendis quod unde numquam nobis, mollitia laborum, praesentium impedit dolorem iste, corrupti odit facilis veritatis!
            </p>
            <p className='text-base text-slate-700'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet, ut quam dolore eius animi dolor numquam voluptatum sapiente maxime ducimus fuga illum, aliquid officiis mollitia eos sed. Dolore debitis fuga magni adipisci consequatur reiciendis molestiae iusto, sint culpa? Voluptatem perferendis quod unde numquam nobis, mollitia laborum, praesentium impedit dolorem iste, corrupti odit facilis veritatis!
            </p>
        </main>
        <Footer />
        </>
    )
}
