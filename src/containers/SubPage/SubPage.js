import React from 'react';
import styles from './SubPage.module.css';
import TopHeader from '../../components/TopHeader/TopHeader';

const SubPage = (props) => (
    <div className={styles.container}>
        <TopHeader
            title={props.title}
            number={props.number}
        />
        {props.children}
    </div>
);
export default SubPage;
