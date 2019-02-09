import React from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const Contact = (props) => (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <h2 className={styles.header}>
                    Kontakt
                </h2>
                <SocialIcons
                    black={true}
                    noBorder={true}
                />
            </div>
            <ContactForm />
        </div>
);
export default Contact;
