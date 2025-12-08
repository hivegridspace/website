/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    // Enable TypeScript checking - catches type errors before deploy
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    // ESLint is handled separately via eslint.config.mjs
    // We run it as a separate step in CI for faster feedback
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-navigation-menu'],
  },
}

export default nextConfig
