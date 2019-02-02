import React from 'react';
import styles from './Logo.module.css';
import logo from '../../img/logo.png';

const Logo = (props) => {
    let absolute = {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        margin: 'auto',
    }
    return(
        <img src={logo} className={styles.container} alt="Escala Poland logo" style={props.absolute ? absolute : null}/>
    );
}
export default Logo;
