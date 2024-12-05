import React from 'react'
import NextHead from 'next/head'

export default function Head({ title, desc, imgSrc="/img/ogimage1.png" }) {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta property="og:image" content={`https://al-habib-travels-next-app.vercel.app${imgSrc}`} />
            <meta name="google-site-verification" content="I2jsNVBKwvp_5Sx1k7-6X8JEj7sI_OqZEUnNOqXaxrc" />
            <meta name="facebook-domain-verification" content="2atcfhak55w5ehq9wjv41r05n9o46b" />
        </NextHead>
    )
}
