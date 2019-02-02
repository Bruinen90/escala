import React from 'react';
import styles from './ProductThumb.module.css';

const ProductThumb = (props) => (
    <div className={styles.container}>
        <img
            src={`require(../../../img/prodThumbs/${props.index}.jpg)`}
            alt="Test"
            className={styles.thumb}
        />
        <h3 className={styles.type}>{props.type}</h3>
        <h3 className={styles.name}>{props.name}</h3>
    </div>
);
export default ProductThumb;
