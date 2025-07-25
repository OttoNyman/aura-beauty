module.exports = {
  images: {
    unoptimized: false,
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "/images/:path*",
      },
    ];
  },
};
