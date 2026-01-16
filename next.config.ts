import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "motion"],
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
