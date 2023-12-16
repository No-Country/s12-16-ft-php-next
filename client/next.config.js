/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BACKEND_URL: "https://s12-16-ft-php-next-production.up.railway.app",
  },
};

module.exports = nextConfig;
