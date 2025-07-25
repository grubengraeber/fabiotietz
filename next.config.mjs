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
        {
          protocol: 'https',
          hostname: 'cdn.join.com',
        },
        {
          protocol: 'https',
          hostname: 'www.moderne-schiesslehre.de',
        },
        {
          protocol: 'https',
          hostname: 'cdn0.erstegroup.com',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
        },
        {
          protocol: 'https',
          hostname: 'devtop.io',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'blog.appseed.us',
        },
        {
          protocol: 'https',
          hostname: 'web-forward.de',
        },
        {
          protocol: 'https',
          hostname: 'www.drupal.org',
        },
        {
          protocol: 'https',
          hostname: 'cp.drunomics.com',
        },
        {
          protocol: 'https',
          hostname: 'sellinnx.at',
        },
        {
          protocol: 'https',
          hostname: 'www.blackaustria.info',
        },
        {
          protocol: 'https',
          hostname: 'i0.wp.com',
        },
        {
          protocol: 'https',
          hostname: 'kochrezepte.de',
        },
        {
          protocol: 'https',
          hostname: 'b1759693.smushcdn.com',
        },
        {
          protocol: 'https',
          hostname: 'miro.medium.com',
        },
        {
          protocol: 'https',
          hostname: 'media.proprofs.com',
        },
      ],
    },
    webpack: (config) => {
      config.resolve.alias.canvas = false; 
      return config;
    },
  };
  
  export default nextConfig;