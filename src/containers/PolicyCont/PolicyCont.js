import React from 'react';
import styles from './PolicyCont.module.css';
import closeIcon from '../../img/icons/close_icon.svg'

const PolicyCont = (props) => {
    let display = props.show ? 'flex' : 'none';
    return(
        <div className={styles.container} style={{display: display}}>
            <div className={styles.headerBar}>
                <h2 className={styles.header}>
                    {props.header}
                </h2>
                <img
                    src={closeIcon}
                    alt="Zamknij"
                    className={styles.closeIcon}
                    onClick={props.clickClose}
                />
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}
export default PolicyCont;
