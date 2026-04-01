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
  trailingSlash: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-navigation-menu'],
  },
}

export default nextConfig
