import React, { Component } from 'react';
import styles from './Product.module.css';
import Gallery from '../../components/Gallery/Gallery';

class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product {this.props.index}</h1>
                <Gallery
                    productIndex = {this.props.index}
                    imagesCount = {2}
                />
            </div>
        );
    }
}
export default Product;
