module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en-US', 'de', 'fr', 'es', 'hr'],
    },
    localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  };
  