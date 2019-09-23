import React, { Component } from 'react';
import styles from './Cooperation.module.css';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';
import { Link } from 'react-router-dom';
import { Translate, withLocalize } from 'react-localize-redux';
import data from './data.json';

class Cooperation extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
    componentDidMount() {
        const allImg = document.querySelectorAll('.row_animated');
        const fadeIn = e => {
            allImg.forEach(image => {
                if (
                    image.getBoundingClientRect().top <
                    window.innerHeight * 0.8
                ) {
                    image.classList.add(styles.show);
                }
            });
        };
        fadeIn();
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        return (
            <SubPage title={<Translate id='cooperation.title' />} number='04'>
                <NarrowPage>
                    <div className={[styles.row, 'row_animated'].join(' ')}>
                        <div className={styles.imgWrapper}>
                            <div className={styles.whiteCover}></div>
                            <div className={styles.blackCover}></div>
                            <img
                                src={require(`../../img/cooperation/img_1.jpg`)}
                                alt={<Translate id='cooperation.title' />}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.header}>
                                <Translate id='cooperation.contracts.header' />
                            </h3>
                            <div>
                                <Translate id='cooperation.contracts.text' />{' '}
                                <Link to='/contact'>
                                    <Translate id='cooperation.contact' />
                                </Link>{' '}
                                <Translate id='cooperation.or' />{' '}
                                <a href='mailto: info@escalapoland.com'>
                                    info@escalapoland.com
                                </a>
                                .
                                <p>
                                    <Translate id='cooperation.contracts.welcome' />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={[styles.row, 'row_animated'].join(' ')}>
                        <div className={styles.imgWrapper}>
                            <div className={styles.whiteCover}></div>
                            <div className={styles.blackCover}></div>
                            <img
                                src={require(`../../img/cooperation/img_2.jpg`)}
                                alt='Współpraca'
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.header}>
                                <Translate id='cooperation.architects.header' />
                            </h3>
                            <div>
                                <Translate id='cooperation.architects.text' />{' '}
                                <Link to='/contact'>
                                    <Translate id='cooperation.contact' />
                                </Link>{' '}
                                    <Translate id='cooperation.or' />{' '}
                                <a href='mailto: info@escalapoland.com'>
                                    info@escalapoland.com
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </NarrowPage>
            </SubPage>
        );
    }
}
export default withLocalize(Cooperation);
