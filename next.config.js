/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["zstiojar.edu.pl"],
  },
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
    localeDetection: false,
  },
};

module.exports = nextConfig;
