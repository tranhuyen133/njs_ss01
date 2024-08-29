module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tse3.mm.bing.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tse3.mm.bing.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tse3.mm.bing.net',
          port: '',
          pathname: '/**',
        },

      ],
    },
  }
  module.exports = {
    reactStrictMode: true,
    // Include other configurations here
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/sitemap.ts',
        },
      ];
    },
  };
  