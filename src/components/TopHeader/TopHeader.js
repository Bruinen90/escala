import React from 'react';
import styles from './TopHeader.module.css';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';

const TopHeader = (props) => (
    <div className={styles.container}>
        <h1 className={styles.header}>
            <span className={styles.number}>{props.number}</span>
            {props.title}
        </h1>
        <div className={styles.logoCont}>
            <Logo
                black={!props.white}
            />
        </div>
        <SocialIcons
            black={!props.white}
        />
    </div>
);
export default TopHeader;
