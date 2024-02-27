/** @type {import('next').NextConfig} */

const {NEXT_PUBLIC_IMAGES_DOMAINS,NEXT_PUBLIC_API_HOST} = process.env;
const nextConfig = {
  env: {
    NEXTAUTH_URL: 'http://localhost:3000' // Thay đổi URL của ứng dụng của bạn tại đây
  },
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
    domains: ['movie-tisket.atlassian.net'],
  },

  // env: {
	// 	BASE_API_URL: NEXT_PUBLIC_API_HOST,
	// },
}

module.exports = nextConfig

