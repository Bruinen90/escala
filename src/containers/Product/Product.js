import React, { Component } from 'react';
import styles from './Product.module.css';

import SubPage from '../SubPage/SubPage';
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import product from '../../data/products';

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
        const imagesCount = product[i].imagesCount;
        const bigImg = require(`../../img/products/product_${this.props.index}/${imagesCount}.jpg`);
        return (
            <SubPage>
                <div className={styles.grid}>
                    <div className={styles.description}>
                        <h2 className={styles.name}>
                            {product[i].name}
                        </h2>
                        <div className={product[i].description}>
                            {product[i].description}
                        </div>
                        <Button>
                            Zapytaj o cenę
                        </Button>
                        <Button>
                            Specyfikacja
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
                            szerokość: {product[i].width} mm <br />
                            głębokość: {product[i].depth} mm <br />
                            wysokość: {product[i].height} mm <br />
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
