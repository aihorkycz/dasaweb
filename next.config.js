/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Toto vytvoří statickou verzi webu
  images: {
    unoptimized: true, // Nutné pro funkčnost obrázků na GitHubu
  },
};

export default nextConfig;



