import React, { Component } from 'react';
import styles from './Cooperation.module.css';
import data from '../../data/cooperation.js';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';

class Cooperation extends Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
    }
    componentDidMount() {
        const img = this.image.current
        const fadeIn = (e) =>{
        if(img.getBoundingClientRect().top < window.innerHeight*0.8) {
            img.classList.add(styles.show)
            }
        }
        fadeIn();
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        return (
            <SubPage
                title="O nas"
                number="04"
            >
                <NarrowPage>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <h3 className={styles.header}>
                                {data.sections[0].header}
                            </h3>
                            <div>
                                {data.sections[0].description}
                            </div>
                        </div>
                        <img
                            src={require(`../../img/cooperation/img_1.jpg`)}
                            alt="Współpraca"
                            className={styles.img}
                            ref={this.image}
                        />
                        <div className={styles.row}>
                            <h3 className={styles.header}>
                                {data.sections[1].header}
                            </h3>
                            <div>
                                {data.sections[1].description}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <h3 className={styles.header}>
                                {data.sections[2].header}
                            </h3>
                            <div>
                                {data.sections[2].description}
                            </div>
                        </div>
                    </div>
                </NarrowPage>
            </SubPage>
        );
    }
}
export default Cooperation;
