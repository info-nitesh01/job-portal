/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add raw loader for binary files
        config.module.rules.push({
            test: /canvas\.node$/,
            loader: 'raw-loader',
        });

        return config;
    },
};

export default nextConfig;
