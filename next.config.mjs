/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'http',
            hostname: 'openweathermap.org',
          },
        ],
      },
};

export default nextConfig;
