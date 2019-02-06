import React, { Component } from 'react';
import styles from './About.module.css';
import data from '../../data/about.js';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';

class About extends Component {
    state = {
        scrollPos: 0,
    }
    componentDidMount() {
        const allImg = document.querySelectorAll(`.${styles.img}`);
        const fadeIn = (e) =>{
            this.setState({scrollPos: window.pageYOffset})
            allImg.forEach(image => {
                if(image.getBoundingClientRect().top < window.innerHeight*0.8) {
                    image.classList.add(styles.show)
                }
            })
        }
        window.addEventListener('load', fadeIn)
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        const content = [];
        data.sections.forEach((section, index) => {
            content.push(
                <div className={styles.row} key={index}>
                    <div className={styles.text}>
                        <h3 className={styles.header}>
                            {section.header}
                        </h3>
                        <div>
                            {section.description}
                        </div>
                    </div>
                    <img
                        src={require(`../../img/about/img_${index+1}.jpg`)}
                        alt={section.header}
                        className={styles.img}
                    />
                </div>
            )
        })
        return (
            <SubPage>
                <NarrowPage>
                    <div className={styles.container}>
                        {content}
                    </div>
                </NarrowPage>
            </SubPage>
        );
    }
}
export default About;
