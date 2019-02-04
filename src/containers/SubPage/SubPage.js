import React from 'react';
import styles from './SubPage.module.css';
import Logo from '../../components/Logo/Logo';
import LogoCont from '../../components/Logo/LogoCont/LogoCont';

const SubPage = (props) => (
    <div className={styles.container}>
        <LogoCont>
            <Logo
                black={true}
                topLeft={true}
            />
        </LogoCont>
        {props.children}
    </div>
);
export default SubPage;
