/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false, // is redirect temporary or permanent?
      },
      {
        source:'/old-blog/:id',
        destination:'/new-blog/:id',
        permanent:true
      }
    ];
  },
};

module.exports = nextConfig;
