import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    // This ensures Prisma client is bundled correctly
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

export default nextConfig;
