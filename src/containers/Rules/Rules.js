import React from 'react';
import styles from './Rules.module.css';

const Rules = (props) => {
    return(
        <div className={styles.container}>
                {props.children}
        </div>
    );
};

export default Rules;
