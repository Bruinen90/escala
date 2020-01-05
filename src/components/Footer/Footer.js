import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Translate, withLocalize } from 'react-localize-redux';

import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';

import data from './data.json';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo relative={true} />
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socials}>
            <span className={styles.follow}>
              <Translate id="follow" />
            </span>
            <SocialIcons small={true} mobile={true} />
          </div>
          {/* <div className={styles.year}>2019 Escala Poland</div>
            <div className={styles.cookies}>
                <div onClick={props.clickShowCookies}>Cookies</div>
                <div onClick={props.clickShowPrivace}>Polityka prywatności</div>
            </div> */}
        </div>
        <div>
          <h3 className={styles.header}>
            <Translate id="contact" />
          </h3>
          <div className={styles.text}>
            <a href="mailto: info@escalapoland.com">info@escalapoland.com</a>
            <br />
            <a href="http://www.escalapoland.com">www.escalapoland.com</a>
            <br />
            <a href="tel: +48 530 90 10 90" className={styles.phone}>
              +48 530 90 10 90
            </a>
          </div>
        </div>
        <div>
          <h3 className={styles.header}>
            <Translate id="address" />
          </h3>
          <div className={styles.text}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=EiRDZWdpZWxuaWFuYSAyOSwgMzgtNTAwIFNhbm9rLCBQb2xhbmQiMBIuChQKEgkDC54enG08RxH3m4d5kVR9rhAdKhQKEgkbFEKynm08RxEosicDQtdQVA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="street" />
              <br />
              38-500 Sanok
              <br />
              <Translate id="poland" />
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
        <div></div>
        <div></div>
        <div className={styles.policyLink}>
          <Link to="/info">
            <Translate id="owu" />
          </Link>
        </div>
        <div className={styles.policyLink}>
          <Link to={{ pathname: '/info', search: 'policy' }}>
            <Translate id="privacy" />
          </Link>
        </div>
      </div>
    );
  }
}
export default withLocalize(Footer);
