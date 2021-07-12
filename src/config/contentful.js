if(process.env.ENVIRONMENT === "LOCAL") {
    module.exports = {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            host: `preview.contentful.com`,
        },
    };
}else{
    module.exports = {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    };

}