// host/next.config.js
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    home: `home@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        },
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
