import React from 'react';
import styles from './PolicyWarning.module.css';
import { Link } from 'react-router-dom';

const PolicyWarning = (props) => {
    return(
        <div className={styles.container}>
            Korzystając z naszej strony wyrażasz zgodę na wykorzystanie plików cookies w celach statystycznych oraz dostosowania serwisu do indywidualnych potrzeb użytkowników.
            Więcej informacji na ten temat można znaleźć w dziale
            <Link to="/info" className={styles.link}>Info</Link>.
            <div className={styles.closeIconCont} onClick={props.clickClose}>
                <img
                    src={require('../../img/icons/close_icon.svg')}
                    alt="Zamknij"
                    className={styles.closeIcon}
                />
            </div>
        </div>
    );
};

export default PolicyWarning;
