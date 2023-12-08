/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cms.rcibygg.se"],
	},
	async redirects() {
		return [
			{
				source: "/tjanster",
				destination: "/#tjanster",
				permanent: true,
			},
		];
	},
};
  
  module.exports = nextConfig;
  