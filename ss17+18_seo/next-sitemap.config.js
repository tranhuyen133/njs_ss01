// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // (optional) generate robots.txt file
    sitemapSize: 7000, // Split the sitemap if it has more than 7000 URLs
    exclude: ['/admin/*'], // Exclude certain paths if necessary
    changefreq: 'weekly',
    priority: 0.7,
    // Additional options like alternateRefs can also be added
  };
  