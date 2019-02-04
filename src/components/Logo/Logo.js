import React from 'react';
import styles from './Logo.module.css';
import logoWhite from '../../img/logo/logo_white.svg';
import logoBlack from '../../img/logo/logo_black.svg';

const Logo = (props) => {
    const classes = [styles.container];
    if(props.absolute) {classes.push(styles.absolute)};
    if(props.topLeft) {classes.push(styles.topLeft)};
    return(
        <img
            src={props.black ? logoBlack : logoWhite}
            className={classes.join(' ')} 
            alt="Escala Poland logo"
        />
    );
}
export default Logo;
