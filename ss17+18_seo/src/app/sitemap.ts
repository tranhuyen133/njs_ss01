// app/sitemap.ts
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx: any) => {
  const urls = [
    {
      loc: 'http://localhost:3000/posts', // URL of the posts page
      lastmod: new Date().toISOString(),  // Last modified date
      changefreq: 'weekly',                // Frequency of updates
      priority: 0.8,                       // Priority for search engines
    },
    // Additional URLs can be added here
  ];

  return getServerSideSitemap(ctx, urls);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
