/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com'
            },
            {
                hostname: 'images.pexels.com'
            },
            {
                hostname: 'img.freepik.com'
            },
            {
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
