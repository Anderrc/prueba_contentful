import React from 'react';
import './style.scss';
import Layout from '../../organims/Layout';

const Product = (props) => {
    const { pageContext } = props;
    const { producto, breadCrumbs } = pageContext;

    return (
        <Layout>
            <div className="t-product__bread-crumbs">
                {breadCrumbs.map((item) => (
                    <div>
                        <a href={'/' + item.url}>{item.name}</a>/
                    </div>
                ))}
            </div>
            <h1>Producto</h1>
            {producto.productName.productName}
        </Layout>
    );
};

export default Product;
