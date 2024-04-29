/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'templates.hibootstrap.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'pngset.com'
            }
        ],
    },
};

export default nextConfig;
