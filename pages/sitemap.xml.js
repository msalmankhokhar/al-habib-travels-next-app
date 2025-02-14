import { BASE_URL } from "@/lib/constants";
import connectDb from "@/lib/mongoose";
import Package from "@/models/Package";
import { generateSlug } from "@/lib/helpers";

function generateSiteMap(packages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Static Pages -->
        <url>
            <loc>${BASE_URL}</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${BASE_URL}/contact</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>${BASE_URL}/about</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>${BASE_URL}/privacy-policy</loc>
            <changefreq>yearly</changefreq>
            <priority>0.5</priority>
        </url>

        <!-- Package Categories -->
        <url>
            <loc>${BASE_URL}/ramadan-umrah-packages</loc>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>${BASE_URL}/visa</loc>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
        </url>

        <!-- Hotel Information -->
        <url>
            <loc>${BASE_URL}/makkah-hotels</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>${BASE_URL}/madinah-hotels</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>

        <!-- Dynamic Package Pages -->
        ${packages.map((pkg) => `
        <url>
            <loc>${`${BASE_URL}/package/${generateSlug(pkg.title)}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
        </url>
        `).join('')}
    </urlset>`;
}

export async function getServerSideProps({ res }) {
    await connectDb();
    const packages = await Package.find({}).lean();
    const sitemap = generateSiteMap(packages);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function SiteMap() {
    // getServerSideProps handles the generation
}