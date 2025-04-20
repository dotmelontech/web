/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // ————— Allow `next export` for static HTML —————
  output: 'export',

  // ————— Preserve your existing settings —————
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ————— Serve under `/web` on GitHub Pages —————
  basePath:    isProd ? '/web'  : '',
  assetPrefix: isProd ? '/web/' : '',

  // ————— Make URLs end in `/` so GitHub Pages finds them —————
  trailingSlash: true,
};

export default nextConfig;
