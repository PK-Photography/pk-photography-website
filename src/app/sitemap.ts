import {MetadataRoute} from "next";

export default async function sitemap(): Promise <MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://pkphotography.in/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    ]
}