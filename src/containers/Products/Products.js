import React, { Component } from 'react';
import styles from './Products.module.css';
import ProductThumb from './ProductThumb/ProductThumb';
import productsData from '../../data/products';

class Products extends Component {
    render() {

        const productsOutput = productsData.map((product, index) => {
            return(
                <ProductThumb
                    name = {product.name}
                    type = {product.type}
                    key = {index}
                    index = {index}
                />
            )
        })
        return (
            <div className={styles.container}>
                <div className={styles.grid}>
                    {productsOutput}
                </div>
            </div>
        );
    }
}
export default Products;
