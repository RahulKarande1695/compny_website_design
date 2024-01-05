/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'export',
    // reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
