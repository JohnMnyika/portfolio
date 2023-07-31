/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add the webpack configuration to handle PDF files
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Keep the original file name and extension
            outputPath: 'assets/pdf/', // Output path for the PDF files after build
            publicPath: `/_next/static/assets/pdf/`, // Public path to access the PDF files in the browser
            // You can adjust the publicPath based on your project's deployment configuration
            // For example, if your app is hosted at /my-app/ in the domain, you may use `/_next/static/my-app/assets/pdf/`
            // or simply `/my-app/assets/pdf/`
          },
        },
      ],
    });

    // Important: Return the modified config
    return config;
  },
};

module.exports = nextConfig;
