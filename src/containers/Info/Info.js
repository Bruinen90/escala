import React, { Component } from 'react';
import styles from './Info.module.css';
import SubPage from '../SubPage/SubPage';
// import ows from '../../pdf/ows.pdf';
// import cookies from '../../pdf/cookies.pdf';
import OWS from '../../components/OWS/OWS';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';
import NarrowPage from '../NarrowPage/NarrowPage';

class Info extends Component {
    constructor(props) {
        super(props)
        this.privacyPolicyRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.location.search === '?policy') {
            window.scrollTo(0, this.privacyPolicyRef.current.offsetTop)
        } else {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return(
            <SubPage
                title='Info'
                number='05'
            >
                <NarrowPage>
                    <div className={styles.container}>
                        <OWS />
                        <div ref={this.privacyPolicyRef}>
                            <PrivacyPolicy />
                        </div>
                        {/* <div className={styles.links}>
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
                                    Polityka cookies
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
                                    Zasady RODO
                                </span>
                            </a>
                        </div> */}
                    </div>
                </NarrowPage>
            </SubPage>
        );
    }

};

export default Info;
