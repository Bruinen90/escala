import React, { Component } from 'react';
import Slide from './Slide/Slide.js';
import SliderIcon from './SliderIcon/SliderIcon';
import styles from './Slider.module.css';

class Slider extends Component {
    state = {
        currSlide: 0,
    }

    autoPlay = () => {
        const change = () => {
            if(this.state.currSlide < this.props.slidesCount -1) {
                this.setState({currSlide: this.state.currSlide + 1})
            } else {
                this.setState({currSlide: 0})
            }
        }
        this.slideShow = setInterval(()=>change(), 5000);
    }

    changeSlide = (newSlideNo) => {
        let newSlide = newSlideNo
        if(newSlideNo > this.props.slidesCount -1) {
            newSlide = 0
        } else if (newSlideNo < 0) {
            newSlide = this.props.slidesCount -1
        }
        this.setState({currSlide: newSlide})
        clearInterval(this.slideShow)
        this.autoPlay();
    }

    componentDidMount() {
        this.autoPlay()
    }
  render() {
      const slides = [];
      for (let i=0; i<this.props.slidesCount; i++) {
          slides.push(
            <Slide
                key={i}
                image={i}
                show={this.state.currSlide === i}
            />
          )
      }
      const fullHeightMobile = {
          height: window.innerHeight + 'px',
      }
    return (
      <div className={styles.slider} style={fullHeightMobile}>
        {slides}
        {/* <SocialIcons /> */}
        <SliderIcon />
      </div>
    );
  }
}
export default Slider;
