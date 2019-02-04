import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
    <div className={styles.container} onClick={props.click}>
        {props.children}
    </div>
);
export default Button;
