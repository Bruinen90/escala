import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = (props) => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Logo
                relative={true}
            />
        </div>
        <div className={styles.socialContainer}>
            <div className={styles.socials}>
                <span className={styles.follow}>Śledź nas na</span>
                <SocialIcons
                    small={true}
                    mobile={true}
                />
            </div>
            {/* <div className={styles.year}>2019 Escala Poland</div>
            <div className={styles.cookies}>
                <div onClick={props.clickShowCookies}>Cookies</div>
                <div onClick={props.clickShowPrivace}>Polityka prywatności</div>
            </div> */}
        </div>
        <div>
            <h3 className={styles.header}>Kontakt</h3>
            <div className={styles.text}>
                <a href="mailto: info@escalapoland.com">info@escalapoland.com</a><br/>
                <a href="tel: +48 530 90 10 90" className={styles.phone}>+48 530 90 10 90</a>
            </div>
        </div>
        <div>
            <h3 className={styles.header}>Adres</h3>
            <div className={styles.text}>
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=EiRDZWdpZWxuaWFuYSAyOSwgMzgtNTAwIFNhbm9rLCBQb2xhbmQiMBIuChQKEgkDC54enG08RxH3m4d5kVR9rhAdKhQKEgkbFEKynm08RxEosicDQtdQVA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ul. Cegielniana 29<br/>
                    38-500 Sanok
                </a>
            </div>
        </div>
    </div>
);
export default Footer;
