/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
        },
        {
          protocol: 'https',
          hostname: 'images.app.goo.gl',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: '*.googleusercontent.com',
        },
      ],
    },
    webpack: (config) => {
      config.resolve.alias.canvas = false; 
      return config;
    },
  };
  
  export default nextConfig;