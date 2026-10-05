/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate the "out" folder
  basePath: '/TribenTrend', // Matches your GitHub repository name
  images: {
    unoptimized: true, // Required for static exports on GitHub Pages
  },
};

export default nextConfig;
