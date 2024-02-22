/** @type {import('next').NextConfig} */

const {NEXT_PUBLIC_IMAGES_DOMAINS,NEXT_PUBLIC_API_HOST} = process.env;
const nextConfig = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'jira-clone-beta.vercel.app',
        defaultLocale: 'en-US',
      }
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port:'3000',
        pathname: '/',
      }
    ],
  },
  // env: {
	// 	BASE_API_URL: NEXT_PUBLIC_API_HOST,
	// },
}

module.exports = nextConfig

