import React, { Component } from 'react';
import styles from './Home.module.css';
import Slider from '../../components/Slider/Slider';
import Logo from '../../components/Logo/Logo';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo
            absolute={true}
        />
        <Slider
            slidesCount = {5}
        />
      </div>
    );
  }
}
export default Home;
