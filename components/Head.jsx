import React from 'react'
import NextHead from 'next/head'
import { DOMAIN } from '@/lib/constants'

export default function Head({ title, desc, imgSrc="/img/ogimage1.png" }) {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta property="og:image" content={`https://${DOMAIN}${imgSrc}`} />
            <meta name="facebook-domain-verification" content="2atcfhak55w5ehq9wjv41r05n9o46b" />
            
            {/* Schema markup for better SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TravelAgency",
                    "name": "Al Habib Travel",
                    "image": `https://${DOMAIN}${imgSrc}`,
                    "description": desc,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "London",
                        "addressRegion": "England",
                        "postalCode": "E6 2JA",
                        "streetAddress": "182-184 High Street North East Ham"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "51.5393",
                        "longitude": "0.0511"
                    },
                    "url": "https://www.alhabibtravel.co.uk",
                    "telephone": "+442035042344",
                    "priceRange": "££"
                })}
            </script>
        </NextHead>
    )
}
