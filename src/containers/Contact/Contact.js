import React, { Component } from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import GoBack from '../../components/GoBack/GoBack';
import SubPage from '../SubPage/SubPage';

class Contact extends Component {
    render() {
        const prodInput = this.props.location.state;
        let message;
        let topic;
        if(prodInput) {
            const type = prodInput.question === 'price' ? ['wyceny', 'Wycena'] : ['modelu 3D', 'Model 3D']
            message = `Proszę o przesłanie ${type[0]} produktu ${prodInput.productName}`;
            topic = `${type[1]} ${prodInput.productName}`
        }
        return (
            <SubPage
                title="Kontakt"
                number="06"
            >
                <ContactForm
                    message = {message}
                    topic = {topic}
                />
                <div className={styles.bottomBar}>
                    <GoBack/>
                </div>
            </SubPage>
        );
    }
}
export default Contact;
