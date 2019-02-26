import React, { Component } from 'react';
import styles from './Product.module.css';

import SubPage from '../SubPage/SubPage';
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import product from '../../data/productsDone';

class Product extends Component {
    render() {
        const i = this.props.index - 1;
        const colours = [];
        for(let colour of product[i].colours) {
            colours.push(
                <img
                    src={require(`../../img/colours/${colour}.jpg`)}
                    alt={`Kolor ${colour}`}
                    className={styles.colourImg}
                    key={colour}
                />
            )
        }
        // const imagesCount = product[i].imagesCount;
        // const bigImg = require(`../../img/products/product_${this.props.index}/${imagesCount}.jpg`);
        const bigImg = require(`../../img/products/product_${this.props.index}/4.jpg`);
        return (
            <SubPage
                title="Produkty"
                number="02"
                noGoBack={true}
            >
                <div className={styles.grid}>
                    <div className={styles.description}>
                        <h2 className={styles.name}>
                            {product[i].name}
                        </h2>
                        <div className={product[i].description}>
                            {product[i].description}
                        </div>
                        <Button
                            target="/contact"
                            productName={product[i].name}
                            question='price'
                        >
                            Zapytaj o cenę
                        </Button>
                        <br />
                        <Button
                            target="/contact"
                            productName={product[i].name}
                            question='3dmodel'
                        >
                            Model 3D
                        </Button>
                    </div>
                    <Gallery
                        productIndex = {this.props.index}
                        imagesCount = {product[i].imagesCount}
                    />
                    <div className={styles.info}>
                        <h3 className={styles.techHeader}>
                            Informacje techniczne
                        </h3>
                        <div className={styles.size}>
                            <h4>
                                Wymiary
                            </h4>
                            szerokość: {product[i].diameters.width} mm <br />
                            głębokość: {product[i].diameters.depth} mm <br />
                            wysokość: {product[i].diameters.height} mm <br />
                        </div>
                        <div className={styles.info}>
                            <h4>
                                Kolorystyka
                            </h4>
                            <h5>
                                płynne metale
                            </h5>
                            <div className={styles.colours}>
                                {colours}
                            </div>
                            <h5>
                                akryl metalizowany
                            </h5>
                            <div className={styles.colours}>
                                {colours}
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.bigImgCont}
                        style={{
                            backgroundImage: `url(${bigImg})`,
                        }}
                    >
                    </div>
                </div>
            </SubPage>
        );
    }
}
export default Product;
