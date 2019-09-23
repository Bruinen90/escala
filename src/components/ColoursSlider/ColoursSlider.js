import React, { Component } from 'react';
import styles from './ColoursSlider.module.css';
import Gallery from '../Gallery/Gallery'


class ColoursSlider extends Component {
    state = {
        sliderPosition: 0,
        chosenColour: false,
        showLigthbox: false,
    }

    moveColours = (direction) => {
        return (
            this.setState({sliderPosition: this.state.sliderPosition + direction})
        )
    }

    clickColourIconHandler = (colour) => {
        this.setState({chosenColour: colour, showLigthbox: true})
    }
    render() {
        const colours = [];
        this.props.coloursList.forEach((colour, index) => {
            colours.push(
                <img
                    src={require(`../../img/${this.props.imgFolderPath}/${colour}.jpg`)}
                    alt={`Kolor ${colour}`}
                    className={styles.colourImg}
                    key={index}
                    onClick={()=>this.clickColourIconHandler(colour)}
                />
            )
        });
        const scrollable = this.props.coloursList.length > 3;
        const slidesCount = Math.ceil(this.props.coloursList.length/3);
        return (
            <React.Fragment>
                {this.state.showLigthbox ?
                    <div className={styles.lightbox}>
                        <div
                            className={styles.cover}
                            onClick={()=>this.setState({showLigthbox: false})}
                        ></div>
                        <Gallery
                            imgFolderPath={this.props.imgFolderPath+'/full'}
                            imagesList={this.props.coloursList}
                            clickClose = {()=>this.setState({showLigthbox: false})}
                            visible = {this.state.showLigthbox}
                            chosenImage = {this.props.coloursList.indexOf(this.state.chosenColour) + 1}
                            outlineChosenImage = {true}
                            dark = {true}
                            withCaption = {true}
                        />
                    </div>
                : null
                }
                <div className={styles.container}>
                    <img
                        src={require(`../../img/icons/arrow_left.svg`)}
                        alt="Poprzednie kolory"
                        onClick={()=>this.moveColours(-1)}
                        style={{display: scrollable && this.state.sliderPosition > 0 ? 'block' : 'none'}}
                        className={[styles.arrow, styles.arrowLeft].join(' ')}
                    />
                    <div
                        className={styles.coloursCont}
                    >
                        <div
                            className={styles.coloursSlides}
                            style={{transform: `translateX(${-180*this.state.sliderPosition}px)`}}
                        >
                            {colours}
                        </div>

                    </div>

                    <img
                        src={require(`../../img/icons/arrow_right.svg`)}
                        alt="Następne kolory"
                        onClick={()=>this.moveColours(1)}
                        style={{display: scrollable && this.state.sliderPosition < slidesCount -1 ? 'block' : 'none'}}
                        className={[styles.arrow, styles.arrowRight].join(' ')}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default ColoursSlider;
