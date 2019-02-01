import React from 'react';
import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
    <div className={styles.container}>
        <div className={styles.number}>{props.number}</div>
        <NavLink to={props.target} className={styles.text} activeClassName={styles.active}>{props.text}</NavLink>
    </div>
)};
export default NavItem;
