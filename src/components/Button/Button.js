import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => (
    <Link
        to={{
            pathname: props.target,
            state: {
                productName: props.productName,
                question: props.question,  
            },
        }}
        className={styles.link}
    >
        <div
            className={styles.container}
            onClick={props.click}
        >
            {props.children}
        </div>
    </Link>

);
export default Button;
