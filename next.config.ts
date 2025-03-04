import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'content.linkedin.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'github.githubassets.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'www.cervion.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
