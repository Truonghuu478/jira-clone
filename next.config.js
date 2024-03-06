/** @type {import('next').NextConfig} */

const {NEXT_PUBLIC_DOMAIN} = process.env;
const nextConfig = {
  env: {
    NEXTAUTH_URL: NEXT_PUBLIC_DOMAIN // Thay đổi URL của ứng dụng của bạn tại đây
  },
  images: {
    domains: ['movie-tisket.atlassian.net'],
  }
}

module.exports = nextConfig

