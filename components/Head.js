import React from 'react'
import NextHead from 'next/head'

export default function Head({ title, desc, imgSrc="/img/ogimage1.png" }) {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta property="og:image" content={`https://al-habib-travels-next-app.vercel.app${imgSrc}`} />
        </NextHead>
    )
}
