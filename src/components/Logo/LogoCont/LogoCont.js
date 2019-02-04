import React from 'react';
import styles from './LogoCont.module.css';

const LogoCont = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
);
export default LogoCont;
