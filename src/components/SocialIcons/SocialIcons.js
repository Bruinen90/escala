import React from 'react';
import styles from './SocialIcons.module.css';

const SocialIcons = (props) => {
    let classList = [styles.icon];
    let container = [styles.container]
    props.black && classList.push(styles.black);
    props.small && classList.push(styles.small);
    props.mobile && container.push(styles.mobile);
    return(
    <div className={container.join(' ')}>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <i className="fab fa-facebook-f"></i>
        </a>
        <a
            href="https://www.instagram.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <i className="fab fa-instagram"></i>
        </a>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <i className="fab fa-pinterest-p"></i>
        </a>
    </div>
)};
export default SocialIcons;
