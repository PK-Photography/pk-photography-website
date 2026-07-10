import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots{
    return{
        rules:[
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/client", "/login"],
            }
        ],
        sitemap: 'https://pkphotography.in/sitemap.xml'
    }
}