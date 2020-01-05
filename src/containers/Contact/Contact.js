import React, { Component } from 'react';
// import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubPage from '../SubPage/SubPage';

import { Translate, withLocalize } from 'react-localize-redux';
import data from './data.json';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(data);
  }
  render() {
    const prodInput = this.props.location.state;
    let message;
    let topic;
    if (prodInput) {
      const type =
        prodInput.question === 'price'
          ? ['wyceny', 'Wycena']
          : ['modelu 3D', 'Model 3D'];
      message = `Proszę o przesłanie ${type[0]} produktu ${
        prodInput.productName
      }`;
      topic = `${type[1]} ${prodInput.productName}`;
    }
    return (
      <SubPage title={<Translate id="header" />} number="06">
        <ContactForm message={message} topic={topic} fromProduct={prodInput} />
      </SubPage>
    );
  }
}
export default withLocalize(Contact);
