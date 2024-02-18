/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'avatars.mds.yandex.net',
        }, {
            hostname:  'st.kp.yandex.net'
        }, {
            hostname:  'i.pinimg.com'
        }],
    },
};

export default nextConfig;