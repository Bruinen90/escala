import React, { Component } from 'react';
import styles from './About.module.css';
import data from '../../data/about.js';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';

class About extends Component {
    constructor(props) {
        super(props);
        this.imgRefs = [];
        for(let i = 0; i<data.sections.length; i++) {
            this.imgRefs.push(React.createRef())
        }
    }
    componentDidMount() {
        const allImg = this.imgRefs.map(ref => ref.current)
        const fadeIn = (e) =>{
            allImg.forEach(image => {
                if(image.getBoundingClientRect().top < window.innerHeight*0.8) {
                    image.classList.add(styles.show)
                }
            })
        }
        fadeIn();
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        const content = [];
        data.sections.forEach((section, index) => {
            content.push(
                <div className={styles.row} key={index}>
                    <img
                        src={require(`../../img/about/img_${index+1}.jpg`)}
                        alt={section.header}
                        className={styles.img}
                        ref={this.imgRefs[index]}
                    />
                    <div className={styles.text}>
                        <h3 className={styles.header}>
                            {section.header}
                        </h3>
                        <div>
                            {section.description}
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <SubPage
                title="O nas"
                number="04"
            >
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
