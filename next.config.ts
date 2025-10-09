import type { NextConfig } from "next"

const isGithubPages = process.env.GITHUB_PAGES === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

if (isGithubPages && repoName) {
  nextConfig.assetPrefix = `/${repoName}`
  nextConfig.basePath = `/${repoName}`
}

export default nextConfig
