import React, { Component } from 'react';
import styles from './Gallery.module.css';

class Gallery extends Component {
    state = {
        currImg: 1,
    }

    changeImage = (newImgIndex) => {
        this.setState({currImg: newImgIndex});

    }
    render() {
        const allThumbs = [];
        for(let i = 1; i <= this.props.imagesCount; i++) {
            allThumbs.push(
                <img
                    src={require(`../../img/products/product_${this.props.productIndex}/${i}.jpg`)}
                    alt={this.props.productIndex}
                    onClick={()=>this.changeImage(i)}
                    className={styles.thumb}
                    key={i}
                />
            )
        }
        return (
            <div className={styles.container}>
                <div className={styles.fullImageCont}>
                    <img
                        src={require(`../../img/products/product_${this.props.productIndex}/${this.state.currImg}.jpg`)}
                        alt="Full"
                        className={styles.fullImage}
                    />
                </div>
                <div className={styles.thumbsCont}>
                    {allThumbs}
                </div>
            </div>
        );
    }
}
export default Gallery;
