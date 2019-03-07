import React, { Component } from 'react';
import styles from './Home.module.css';
import Slider from '../../components/Slider/Slider';
// import Logo from '../../components/Logo/Logo';
import TopHeader from '../../components/TopHeader/TopHeader';

class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.headerCont}>
            <TopHeader
                white={true}
            />
        </div>
        <Slider
            slidesCount = {6}
        />
      </div>
    );
  }
}
export default Home;
