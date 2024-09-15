/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc', // Add this line
                pathname: '/**', // Adjust if you need more specific paths
            }
        ],
    },
};

export default nextConfig;
