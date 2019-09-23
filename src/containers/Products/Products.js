import React, { Component } from 'react';
import styles from './Products.module.css';

import SubPage from '../SubPage/SubPage';
import ProductThumb from './ProductThumb/ProductThumb';
import data from '../../data/productsData';

class Products extends Component {
    render() {

        const productsOutput = Object.entries(data.data).map(([keyName, info], index) => {
            return(
                <ProductThumb
                    name = {info.name}
                    type = {info.type}
                    key = {index}
                    index={index}
                />
            )
        })
        return (
            <SubPage
                title="Produkty"
                number="02"
            >
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {productsOutput}
                    </div>
                </div>
            </SubPage>
        );
    }
}
export default Products;
