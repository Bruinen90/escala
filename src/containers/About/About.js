import React, { Component } from 'react';
import styles from './About.module.css';
import data from './data.json';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';
import { Translate, withLocalize } from 'react-localize-redux';

class About extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
    componentDidMount() {
        const allImg = document.querySelectorAll('.row_animatable');
        console.log(allImg)
        const fadeIn = e => {
            allImg.forEach((image, index) => {
                if (
                    image.getBoundingClientRect().top <
                    window.innerHeight * 0.6
                ) {
                    image.classList.add(styles.show);
                }
            });
        };
        fadeIn();
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        const content = Object.entries(data.sections).map(([name, info], index) => {
            return(
                <Translate key={name}>
                    {({ translate }) => (
                        <div className={[styles.row, 'row_animatable'].join(' ')} >
                            <div className={styles.imgWrapper}>
                                <div className={styles.whiteCover}></div>
                                <div className={styles.blackCover}></div>
                                <img
                                    src={require(`../../img/about/img_${index +
                                        1}.jpg`)}
                                    alt={info.header}
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.header}>
                                    {translate(`sections.${name}.header`)}
                                </h3>
                                <div>{translate(`sections.${name}.description`)}</div>
                            </div>
                        </div>
                    )}
                </Translate>
            );
        });
        return (
            <SubPage title={<Translate id="mainHeader" />} number='03'>
                <NarrowPage>
                    <div className={styles.container}>{content}</div>
                </NarrowPage>
            </SubPage>
        );
    }
}
export default withLocalize(About);
