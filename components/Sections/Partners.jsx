import Image from 'next/image'
import React from 'react'

export default function Partners() {
    return (
        <div className='py-7 flex flex-col gap-5'>
            <h1 className="font-bold text-3xl text-center">Our Partners</h1>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-10'>
                <Image width={150} height={150} alt='partner company logo' src={'/img/partners/1.png'}/>
                <Image width={150} height={150} alt='partner company logo' src={'/img/partners/2.png'}/>
                <Image width={150} height={150} alt='partner company logo' src={'/img/partners/3.png'}/>
                <Image width={150} height={150} alt='partner company logo' src={'/img/partners/4.png'}/>
            </div>
        </div>
    )
}
