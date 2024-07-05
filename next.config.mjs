import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
      defaultLocale: 'en-US',
      locales: ['en-US', 'de', 'fr', 'es', 'hr'],
    },
    
  };
  
  export default withNextIntl(nextConfig);