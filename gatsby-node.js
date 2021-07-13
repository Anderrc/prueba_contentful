const path = require('path');

const createSlug = (str) => {
    str = str.replace(/\s+/g, '-');
    return str.toLowerCase();
}

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;

    const templateProducto = path.resolve('src/components/templates/products/index.tsx')

    await graphql(
        `
        {
            allContentfulProduct {
                nodes {
                    brand {
                        companyName {
                            companyName
                        }
                    }
                    categories {
                        title {
                            title
                        }
                    }
                    productName {
                        productName
                    }
                    price
                    slug
                }
            }
        }
        
        `
    ).then((result) => {
        if (result.errors) {
            reject(result.errors)
        }
        result.data.allContentfulProduct.nodes.forEach(product => {
            let slug = createSlug(product.brand.companyName.companyName) + "/" + createSlug(product.categories[0].title.title) + "/" + product.slug;
            let breadCrumbs = [];
            breadCrumbs.push({ url: createSlug(product.brand.companyName.companyName),name: product.brand.companyName.companyName})
            breadCrumbs.push({ url: createSlug(product.brand.companyName.companyName)+"/"+createSlug(product.categories[0].title.title), name: product.categories[0].title.title})
            breadCrumbs.push({ url: slug,name: product.slug});
            createPage({
                path: slug,
                component: templateProducto,
                context: { producto: product, breadCrumbs: breadCrumbs}
            })
        });

        console.log(result.data.allContentfulProduct.nodes.length)
    })
}