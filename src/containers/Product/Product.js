import React, { Component } from 'react';
import styles from './Product.module.css';
import { Translate, withLocalize } from 'react-localize-redux';

import SubPage from '../SubPage/SubPage';
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import ColoursSlider from '../../components/ColoursSlider/ColoursSlider';

import product from '../../data/productsDone';
import data from '../../data/productsData.json';
// import colours from '../../data/colours';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLigthbox: false,
        }
        this.props.addTranslation(data);
    }
    render() {
        console.log(this.props.keyName, this.props.index);
        const i = this.props.index - 1;

        let enlargeIcon = product[i].blackGalleryIcon ? 'enlarge_black' : 'enlarge';
        const imagesCount = product[i].imagesCount;
        const imagesList = [];
        for (let i = 1; i <= imagesCount; i++) { imagesList.push(i) };
        const imgFolderPath =  `products/product_${this.props.index}`;
        const bigImg = require(`../../img/products/product_${this.props.index}/${imagesCount}.jpg`);

        return (
            <React.Fragment>
                {this.state.showLigthbox ?
                    <div className={styles.lightbox}>
                        <div
                            className={styles.cover}
                            onClick={()=>this.setState({showLigthbox: false})}
                        ></div>
                        <Gallery
                            imgFolderPath = {imgFolderPath}
                            imagesList = {imagesList}
                            smallImagesList = {product[i].smallImagesList}
                            mediumImagesList = {product[i].mediumImagesList}
                            clickClose = {()=>this.setState({showLigthbox: false})}
                            visible = {this.state.showLigthbox}
                        />

                    </div>
                : null
                }

                <SubPage
                    title={<Translate id="title" />}
                    number="02"
                    headerGoesBack = {true}
                    noGoBack={true}
                >
                    <div className={styles.grid}>
                        <div className={styles.description}>
                            <h2 className={styles.name}>
                                {product[i].name}
                            </h2>
                            <div className={styles.text}>
                                <Translate id={`data.${this.props.keyName}.description`} />
                                {/* {product[i].description} */}
                                <p>
                                    {product[i].warning && product[i].warning}
                                </p>
                            </div>
                            <div className={styles.buttons}>
                                <Button click={()=>this.setState({showLigthbox: true})}>
                                    Galeria produktu
                                </Button>
                                <Button
                                    target="/contact"
                                    productName={product[i].name}
                                    question='price'
                                >
                                    Zapytaj o cenę
                                </Button>
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
                            className={[styles.galleryCont, product[i].moveUp && styles.moveUp].join(' ')}
                            onClick={()=>this.setState({showLigthbox: true})}
                            // For big, square furniture
                            style={this.props.index === 9 ? {
                                padding: '30px 60px',
                            } : {}}
                        >
                            <img
                                src={require(`../../img/products/product_${this.props.index}/1.jpg`)}
                                alt=""
                                className={styles.galleryImg}
                            />
                            <img
                                src={require(`../../img/icons/${enlargeIcon}.svg`)}
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
                                <div>{product[i].finish.metal && 'metal - '+product[i].finish.metal}</div>
                                <div>{product[i].finish.lakierAkrylowy}</div>
                                <div>{product[i].finish.other}</div>
                            </div>
                            {/* Waits for photos from customer */}
                            <div className={styles.size}>
                                {product[i].colours.metal.length > 2 ?
                                    <React.Fragment>
                                        <h4>
                                            Dostępne warianty wykończenia
                                        </h4>
                                        <h5>
                                            metale
                                        </h5>
                                    </React.Fragment>
                                    : <br />
                                }
                                {product[i].colours.metal &&
                                        <div className={styles.colours}>
                                            <ColoursSlider
                                                coloursList={product[i].colours.metal}
                                                // coloursList={colours.metal}
                                                imgFolderPath={'metals'}
                                            />
                                        </div>
                                }
                                {product[i].colours.acryl &&
                                    <React.Fragment>
                                        <h5>
                                            lakier akrylowy metalizowany
                                        </h5>
                                        <div className={styles.colours}>
                                            <ColoursSlider
                                                coloursList={product[i].colours.acryl}
                                                // coloursList={colours.acryl}
                                                imgFolderPath={'varnishes'}
                                            />
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                            {
                                product[i].colours.metal.length < 3 &&
                                <div className={styles.placeHolder}></div>
                            }
                            <GoBack
                                left={true}
                            />
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
export default withLocalize(Product);
