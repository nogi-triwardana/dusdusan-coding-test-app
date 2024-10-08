/** @type {import('next').NextConfig} */
const nextConfig = {
//   async headers() {
//     return [
//         {
//             // matching all API routes
//             source: "/api/:path*",
//             headers: [
//                 { key: "Access-Control-Allow-Credentials", value: "true" },
//                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
//                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//             ]
//         }
//     ]
    // crossOrigin: 'anonymous'
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.dusdusan.com',
        },
        {
            protocol: 'https',
            hostname: 'nos.wjv-1.neo.id',
        }
        ],
    },
};

export default nextConfig;
