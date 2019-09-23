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
        if(newImgIndex <= this.props.imagesList.length && newImgIndex > 0) {
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

        if(this.props.chosenImage) { this.setState({currImg: this.props.chosenImage}) }
    }
    render() {
        const allThumbs = this.props.imagesList.map((img, index) => {
            return(
                <img
                    src={require(`../../img/${this.props.imgFolderPath}/${img}.jpg`)}
                    alt={this.props.productIndex}
                    onClick={()=>this.changeImage(index+1)}
                    className={[
                        styles.thumb,
                        this.props.imagesList.length === 7 || 6 && styles.thumbSmall,
                        this.props.outlineChosenImage && styles.outlineChosenImage_notChosen,
                        this.props.outlineChosenImage && this.state.currImg === index + 1 && styles.outlineChosenImage_chosen,
                    ].join(' ')}
                    key={index}
                />
            )
        })
        return (
            <div className={[
                styles.container,
                this.props.dark && styles.containerDark
            ].join(' ')}>
                <div className={styles.fullImageCont}>
                    <CSSTransitionGroup
                        transitionName="fadeIn"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                        <img
                            src={require(`../../img/${this.props.imgFolderPath}/${this.props.imagesList[this.state.currImg-1]}.jpg`)}
                            alt="Full"
                            //Some images smaller according to my dear customer - list in data file (productsDone.js)
                            className={
                                [
                                    styles.fullImage,
                                    this.props.smallImagesList ? this.props.smallImagesList.indexOf(this.state.currImg) >= 0 &&
                                    styles.fullImage_small : null,
                                    this.props.mediumImagesList ? this.props.mediumImagesList.indexOf(this.state.currImg) >= 0 &&
                                    styles.fullImage_medium : null
                                ].join(' ')}
                            key={this.state.currImg}
                            onTouchStart={this.touchStartHandler}
                            onTouchEnd={this.touchEndHandler}
                            onTouchMove={this.touchMoveHandler}
                        />
                        {this.props.withCaption &&
                            <div className={styles.caption}>
                                {this.props.imagesList[this.state.currImg-1].replace('_', ' ')}
                            </div>
                        }
                    </CSSTransitionGroup>
                    <img
                        src={require(`../../img/icons/arrow_left${this.props.dark ? '_white' : ''}.svg`)}
                        alt="Poprzednie zdjęcie"
                        onClick={()=>this.changeImage(this.state.currImg-1)}
                        style={{opacity: this.state.currImg === 1 ? 0 : 1}}
                        className={[styles.arrow, styles.arrowLeft].join(' ')}
                    />
                    <img
                        src={require(`../../img/icons/arrow_right${this.props.dark ? '_white' : ''}.svg`)}
                        alt="Następne zdjęcie"
                        onClick={()=>this.changeImage(this.state.currImg+1)}
                        style={{display: this.state.currImg === this.props.imagesList.length ? 'none' : 'block'}}
                        className={[styles.arrow, styles.arrowRight].join(' ')}
                    />
                </div>
                {this.props.imagesList.length > 1 &&
                    <div className={[
                        styles.thumbsCont,
                        this.props.imagesList.length > 7 && styles.thumbsCont_2rows
                    ].join(' ')}>
                            {allThumbs}
                    </div>
                }
                <img
                    src={require(`../../img/icons/close_icon${this.props.dark ? '_white' : ''}.svg`)}
                    alt="Zamknij galerię"
                    onClick={this.props.clickClose}
                    className={styles.closeIcon}
                />
            </div>
        );
    }
}
export default Gallery;
