import React, { Component } from 'react';
import Slide from './Slide/Slide.js';
import SliderIcons from './SliderIcons/SliderIcons';
import SocialIcons from '../SocialIcons/SocialIcons';
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
        this.slideShow = setInterval(()=>change(), 2500);
    }

    changeSlide = (newSlideNo) => {
        let newSlide = newSlideNo
        if(newSlideNo > this.props.slidesCount -1) {
            newSlide = 0
        } else if (newSlideNo < 0) {
            newSlide = this.props.slidesCount -1
        }
        this.setState({currSlide: newSlide})
        clearInterval(this.slideShow);
        this.autoPlay();
    }

    componentDidMount() {
        this.autoPlay()
        document.addEventListener("keydown", (e)=> {
            if(e.keyCode === 39) {
                this.changeSlide(this.state.currSlide + 1)
            }
            if(e.keyCode === 37) {
                this.changeSlide(this.state.currSlide - 1)
            }
        })
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
        <SocialIcons />
        <SliderIcons
            count = {this.props.slidesCount}
            active = {this.state.currSlide}
            clickedIcon={(i)=>this.changeSlide(i)}
        />
      </div>
    );
  }
}
export default Slider;
