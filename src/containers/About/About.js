import React from 'react';
import styles from './About.module.css';
import data from '../../data/about.js';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';

const About = (props) => {
    const content = [];
    data.sections.forEach((section, index) => {
        content.push(
            <div className={styles.row}>
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
    )
};
export default About;
