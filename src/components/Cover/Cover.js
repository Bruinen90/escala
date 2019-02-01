import React from 'react';
import styles from './Cover.module.css';

const Cover = (props) => (
    <div className={styles.cover} onClick={props.toggleMenu} style={props.style}></div>
);
export default Cover;
