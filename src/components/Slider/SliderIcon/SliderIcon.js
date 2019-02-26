import React from 'react';
import styles from './SliderIcon.module.css';

const SliderIcon = (props) => {
    return(
        <div className={styles.container}>
            <div className={[styles.icon, styles.active].join(' ')}>
            </div>
        </div>
);}
export default SliderIcon;
