/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'static.insales-cdn.com',
			},
		],
	},
}

module.exports = nextConfig
