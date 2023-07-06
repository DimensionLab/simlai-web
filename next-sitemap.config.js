/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://siml.ai',
  generateRobotsTxt: true, // (optional)
  // ...other options
  sitemapSize: 7000,
  additionalPaths: async () => [
    {
      loc: 'https://docs.siml.ai',
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  ]
}
