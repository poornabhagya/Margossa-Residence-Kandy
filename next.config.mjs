/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Exact GitHub repo name case matching (Margossa-Residence-Kandy)
  basePath: process.env.NODE_ENV === 'production' ? '/Margossa-Residence-Kandy' : '',
};

export default nextConfig;