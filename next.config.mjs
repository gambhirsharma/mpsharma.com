/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		googlemapkey: process.env.GOOGLE_MAPS_API_KEY,
	}
};

export default nextConfig;
