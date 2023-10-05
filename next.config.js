/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'sallobos.cl',
            port: '',
            pathname: '/content/uploads/**',
        },
        {
            protocol: 'https',
            hostname: 'sallobos.cl',
            port: '',
            pathname: '/content/uploads/*',
        }
        ],
    },}

module.exports = nextConfig
