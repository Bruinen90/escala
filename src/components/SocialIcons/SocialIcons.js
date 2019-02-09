import React from 'react';
import styles from './SocialIcons.module.css';

const SocialIcons = (props) => {
    let noBorder = {
        border: "0",
    }
    let classList = [styles.icon];
    props.black && classList.push(styles.black);
    return(
    <div className={styles.container}>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
            style={props.noBorder ? noBorder : null}
        >
            F
        </a>
        <a
            href="https://www.instagram.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
            style={props.noBorder ? noBorder : null}
        >
            IN
        </a>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
            style={props.noBorder ? noBorder : null}
        >
            P
        </a>
    </div>
)};
export default SocialIcons;
