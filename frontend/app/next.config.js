/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.node = {
  //       net: "empty",
  //     };
  //   }

  //   return config;
  // },
  // node: {
  //   net: 'empty',
  // },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.child_process = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.dns = false;
          config.resolve.fallback.tls = false;
        }
        return config;
      },
};

module.exports = nextConfig;

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.child_process = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.dns = false;
//       config.resolve.fallback.tls = false;
//     }
//     return config;
//   },
// };