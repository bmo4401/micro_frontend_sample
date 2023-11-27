const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // specify exposed pages and components
          './Header': './pages/Header.tsx',
          './Footer': './pages/Footer.tsx',
        },
        shared: {},
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
