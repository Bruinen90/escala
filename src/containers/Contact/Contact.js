import React from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubPage from '..//SubPage/SubPage';

const Contact = (props) => (
    <SubPage>
        <ContactForm></ContactForm>
    </SubPage>
);
export default Contact;
