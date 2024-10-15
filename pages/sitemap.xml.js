import { BASE_URL } from "@/lib/constants";
import connectDb from "@/lib/mongoose";
import Package from "@/models/Package";

function generateSiteMap(packages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     ${
        packages.map((pkg) => {
            return `
            <url>
                <loc>${`${BASE_URL}/package/${pkg.title}`}</loc>
            </url>
            `;
        }).join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // connecting to database
    await connectDb();

    // fetching all packages from database
    const packages = await Package.find({}).lean();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(packages);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
}

export default SiteMap;