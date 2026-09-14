/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → deployable to any static host (Vercel, Netlify, GitHub Pages, S3).
  // Comment out `output: 'export'` if you prefer a Node server (`next start`).
  output: "export",
  images: {
    // Required for static export; the site uses no remote images anyway.
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
