/** @type {import('next').NextConfig} */
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
  }

module.exports = nextConfig

