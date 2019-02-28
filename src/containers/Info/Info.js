import React from 'react';
import styles from './Info.module.css';
import SubPage from '../SubPage/SubPage';
import ows from '../../pdf/ows.pdf';
import cookies from '../../pdf/cookies.pdf';

const Info = (props) => {
    return(
        <SubPage
            title='Info'
            number='05'
        >
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href={ows} target="_blank" className={styles.link}>
                        <img
                            src={require('../../img/icons/pdf_icon.svg')}
                            alt="PDF"
                            className={styles.icon}
                        />
                        <span className={styles.linkText}>
                            Ogólne warunki sprzedaży
                        </span>
                    </a>
                    <br/>
                    <a href={cookies} target="_blank" className={styles.link}>
                        <img
                            src={require('../../img/icons/pdf_icon.svg')}
                            alt="PDF"
                            className={styles.icon}
                        />
                        <span className={styles.linkText}>
                            Polityka prywatności i polityka cookies
                        </span>
                    </a>
                </div>
            </div>
        </SubPage>
    );
};

export default Info;
