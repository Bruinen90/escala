import React from 'react';
import styles from './NarrowPage.module.css';

const NarrowPage = (props) => (
    <div className={styles.container}>
        <div className={styles.center}>
            {props.children}    
        </div>
    </div>
);
export default NarrowPage;
