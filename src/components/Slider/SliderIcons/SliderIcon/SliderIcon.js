import React from 'react';
import styles from './SliderIcon.module.css';

const SliderIcon = (props) => {
    let iconStyles = [];
    if(props.active) {
        iconStyles = [styles.icon, styles.active]
    } else {
        iconStyles = [styles.icon]
    }
    return(
        <div className={styles.container} onClick={props.clicked}>
            <div className={iconStyles.join(' ')}>
            </div>
        </div>
);}
export default SliderIcon;
