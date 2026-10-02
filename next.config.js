/** @type {import('next').NextConfig} */
const nextConfig = {
  // Locale codes match the Contentful locale codes, so they can be passed straight to the API.
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
