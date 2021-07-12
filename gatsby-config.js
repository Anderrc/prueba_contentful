const dotenv = require('dotenv');
let activeEnv = process.env.ENVIRONMENT || "development";
console.log('::::::::::::::::::::::activeEnv ' + activeEnv);
dotenv.config({ path: `./src/env/.env.${activeEnv}` });

const configContentful = require('./src/config/contentful');
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "prueba_contentful",
  },
  plugins: [
    configContentful,
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
  ],
};
