import React from 'react';
import styles from './SocialIcons.module.css';

const SocialIcons = (props) => {
    let classList = [styles.icon];
    let container = [styles.container]
    props.black && classList.push(styles.black);
    props.small && classList.push(styles.small);
    props.mobile && container.push(styles.mobile);
    const iconsColor = props.black ? 'black' : 'white'
    const icons = {
        facebook: require(`../../img/icons/social_${iconsColor}/facebook.svg`),
        instagram: require(`../../img/icons/social_${iconsColor}/instagram.svg`),
        pinterest: require(`../../img/icons/social_${iconsColor}/pinterest.svg`),
    }
    return(
    <div className={container.join(' ')}>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <img src={icons.facebook} alt="" className={styles.icon}/>
        </a>
        <a
            href="https://www.instagram.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <img src={icons.instagram} alt="" className={styles.icon}/>
        </a>
        <a
            href="https://www.facebook.com/escalapoland/"
            target="_blank"
            rel="noopener noreferrer"
            className={classList.join(' ')}
        >
            <img src={icons.pinterest} alt="" className={styles.icon}/>
        </a>
    </div>
)};
export default SocialIcons;
