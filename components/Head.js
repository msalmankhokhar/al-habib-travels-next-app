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
            
            {/* Schema markup for better SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TravelAgency",
                    "name": "Al Habib Travel",
                    "image": `https://al-habib-travels-next-app.vercel.app${imgSrc}`,
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
