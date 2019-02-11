import React from 'react';
import styles from './SubPage.module.css';
import TopHeader from '../../components/TopHeader/TopHeader';
import GoBack from '../../components/GoBack/GoBack';


const SubPage = (props) => (
    <div className={styles.container}>
        <TopHeader
            title={props.title}
            number={props.number}
        />
        {props.children}
        {!props.noGoBack && <GoBack/>}
    </div>
);
export default SubPage;
