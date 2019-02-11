import React from 'react';
import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
    <NavLink
        to={props.target}
        className={styles.container}
        activeClassName={styles.active}
        exact={props.exact}
    >
        <div className={styles.number}>{props.number}</div>
        <div className={styles.text}>{props.text}</div>
    </NavLink>
)};
export default NavItem;
