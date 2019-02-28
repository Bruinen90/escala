import React, { Component } from 'react';
import styles from './Product.module.css';

import SubPage from '../SubPage/SubPage';
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import product from '../../data/productsDone';

class Product extends Component {
    state = {
        showLigthbox: false,
    }
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
            <React.Fragment>
                {this.state.showLigthbox ?
                    <div className={styles.lightbox}>
                        <div
                            className={styles.cover}
                            onClick={()=>this.setState({showLigthbox: false})}
                        ></div>
                        <Gallery
                            productIndex = {this.props.index}
                            imagesCount = {4}
                            clickClose = {()=>this.setState({showLigthbox: false})}
                            visible = {this.state.showLigthbox}
                        />

                    </div>
                : null
                }

                <SubPage
                    title="Produkty"
                    number="02"
                    headerGoesBack = {true}
                >
                    <div className={styles.grid}>
                        <div className={styles.description}>
                            <h2 className={styles.name}>
                                {product[i].name}
                            </h2>
                            <div className={styles.text}>
                                {product[i].description}
                            </div>
                            <div className={styles.buttons}>
                                <Button click={()=>this.setState({showLigthbox: true})}>
                                    Galeria produktu
                                </Button>
                                <br />
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
                        </div>
                        <div
                            className={styles.galleryCont}
                            onClick={()=>this.setState({showLigthbox: true})}
                        >
                            <img
                                src={require(`../../img/products/product_${this.props.index}/1.jpg`)}
                                alt=""
                                className={styles.galleryImg}
                            />
                            <img
                                src={require(`../../img/icons/enlarge.svg`)}
                                alt="Powiększ zdjecie"
                                className={styles.enlargeIcon}
                            />
                        </div>
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
                            <div className={styles.size}>
                                <h4>
                                    Materiał
                                </h4>
                                skrzynia - {product[i].materials.body} <br />
                                stelaż - {product[i].materials.frame} <br />
                            </div>
                            <div className={styles.size}>
                                <h4>
                                    Wykończenie
                                </h4>
                                <div>{product[i].finish.metal}</div>
                                <div>{product[i].finish.lakierAkrylowy}</div>
                                <div>{product[i].finish.other}</div>
                            </div>
                            {/* <div className={styles.info}>
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
                            </div> */}
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
            </React.Fragment>
        );
    }
}
export default Product;
