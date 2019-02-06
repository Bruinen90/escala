import React from 'react';
import styles from './Cover.module.css';

const Cover = (props) => (
    <div
        className={styles.cover}
        onClick={props.toggleMenu}
        style={props.style}
        onTouchStart={props.touchStart}
        onTouchEnd={props.touchEnd}
        onTouchMove={props.touchMove}
    ></div>
);
export default Cover;
