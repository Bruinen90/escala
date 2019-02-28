import React, { Component } from 'react';
import styles from './Gallery.module.css';
import './Animations.css';

import { CSSTransitionGroup } from 'react-transition-group';

class Gallery extends Component {
    state = {
        currImg: 1,
        touchStartPoint: 0,
        touchEndPoint: 0,
        touchMoveX: 0,
    }

    touchStartHandler = (e) => {
        this.setState({touchStartPoint: e.touches[0].clientX, trans: false})
    }

    touchMoveHandler = (e) => {
        this.setState({touchMoveX: e.touches[0].clientX - this.state.touchStartPoint});
    }

    touchEndHandler = (e) => {
        if(this.state.touchMoveX > 30) {
            this.changeImage(this.state.currImg-1);
        }
        if(this.state.touchMoveX < -30) {
            this.changeImage(this.state.currImg+1);
        }
        this.setState({touchMoveX: 0});
    }

    changeImage = (newImgIndex) => {
        if(newImgIndex <= this.props.imagesCount && newImgIndex > 0) {
            this.setState({currImg: newImgIndex});
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (e)=> {
            if(e.keyCode === 39) {
                this.changeImage(this.state.currImg + 1)
            }
            if(e.keyCode === 37) {
                this.changeImage(this.state.currImg - 1)
            }
        })
    }
    render() {
        const allThumbs = [];
        // for(let i = 1; i <= this.props.imagesCount; i++) {
        for(let i = 1; i <= 4; i++) {
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
                    <CSSTransitionGroup
                        transitionName="fadeIn"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                        <img
                            src={require(`../../img/products/product_${this.props.productIndex}/${this.state.currImg}.jpg`)}
                            alt="Full"
                            className={styles.fullImage}
                            key={this.state.currImg}
                            onTouchStart={this.touchStartHandler}
                            onTouchEnd={this.touchEndHandler}
                            onTouchMove={this.touchMoveHandler}
                        />
                    </CSSTransitionGroup>
                    <img
                        src={require(`../../img/icons/arrow_left.svg`)}
                        alt="Poprzednie zdjęcie"
                        onClick={()=>this.changeImage(this.state.currImg-1)}
                        style={{opacity: this.state.currImg === 1 ? 0 : 1}}
                        className={[styles.arrow, styles.arrowLeft].join(' ')}
                    />
                    <img
                        src={require(`../../img/icons/arrow_right.svg`)}
                        alt="Następne zdjęcie"
                        onClick={()=>this.changeImage(this.state.currImg+1)}
                        style={{opacity: this.state.currImg === this.props.imagesCount ? 0 : 1}}
                        className={[styles.arrow, styles.arrowRight].join(' ')}
                    />
                </div>
                <div className={styles.thumbsCont}>
                        {allThumbs}
                </div>
                <img
                    src={require(`../../img/icons/close_icon.svg`)}
                    alt="Zamknij galerię"
                    onClick={this.props.clickClose}
                    className={styles.closeIcon}
                />
            </div>
        );
    }
}
export default Gallery;
