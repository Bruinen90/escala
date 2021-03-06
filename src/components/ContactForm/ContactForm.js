import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Translate, withLocalize } from 'react-localize-redux';

import TextInput from './TextInput/TextInput';

import data from './data.json';

const API_PATH = 'https://woloveburgers.pl/api/contact/index.php';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      topic: this.props.topic || '',
      content: this.props.message || '',
      agreement: false,
      sent: false,
      error: null,
      formValid: false,
      inputs: {
        name: {
          validity: false,
          changed: false,
        },
        email: {
          validity: false,
          changed: false,
        },
        phone: {
          validity: false,
          changed: false,
        },
        topic: {
          validity: this.props.fromProduct,
          changed: false,
        },
        content: {
          validity: this.props.fromProduct,
          changed: false,
        },
        agreement: {
          validity: false,
          changed: false,
        },
      },
    };
    this.props.addTranslation(data);
  }

  submitHandler = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then(result => {
        this.setState({
          sent: result.data.sent,
        });
      })
      .catch(error => this.setState({ error: true }));
  };

  inputChangeHandler = (e, inputName) => {
    const setValidity = value => {
      let inputs = this.state.inputs;
      inputs[inputName].validity = value;
      inputs[inputName].changed = true;
      this.setState({ inputs: inputs });
    };
    if (e.target.type === 'checkbox') {
      this.setState({ [inputName]: e.target.checked });
      if (e.target.checked === true) {
        setValidity(true);
      } else {
        setValidity(false);
      }
    } else if (e.target.innerHTML && inputName === 'topic') {
      this.setState({ [inputName]: e.target.innerHTML });
      setValidity(true);
    } else {
      this.setState({ [inputName]: e.target.value });
      switch (inputName) {
        case 'name':
          setValidity(e.target.value.length > 0 && e.target.value.length < 100);
          break;
        case 'email':
          setValidity(e.target.value.match(/\S+@\S+\.\S+/gi) !== null);
          break;
        case 'phone':
          let typed = e.target.value;
          let striped = typed.replace(/\s|[+]/g, '');
          setValidity(
            striped.match(/^\d+$/gi) !== null &&
              striped.length > 8 &&
              striped.length < 16
          );
          break;
        case 'topic':
          setValidity(e.target.value.length > 0 && e.target.value.length < 100);
          break;
        case 'content':
          setValidity(e.target.value.length > 0 && e.target.value.length < 500);
          break;
        default:
          setValidity(false);
      }
    }

    let validity = true;
    for (let inputType in this.state.inputs) {
      if (this.state.inputs.hasOwnProperty(inputType)) {
        if (this.state.inputs[inputType].validity === false) {
          validity = false;
        }
      }
    }
    this.setState({ formValid: validity });
  };

  render() {
    const setStyle = inputName => {
      if (
        !this.state.inputs[inputName].validity &&
        this.state.inputs[inputName].changed
      ) {
        return { borderColor: 'red' };
      } else {
        return {};
      }
    };

    let sendButtonValue = this.state.sent ? 'sentButton' : 'sendButton';
    if (this.state.error) {
      sendButtonValue = 'errorButton';
    }

    const sendButtonClasslist = [styles.button];
    if (this.state.error) {
      sendButtonClasslist.push(styles.error);
    }
    if (this.state.sent) {
      sendButtonClasslist.push(styles.sent);
    }

    const textInputs = [
      {
        type: 'text',
        placeholder: 'imię i nazwisko / firma',
        label: 'name',
      },
      {
        type: 'email',
        placeholder: 'email',
        label: 'email',
      },
      {
        type: 'phone',
        placeholder: 'numer telefonu',
        label: 'phone',
      },
      {
        type: 'text',
        placeholder: 'temat',
        label: 'topic',
      },
      {
        type: 'textarea',
        placeholder: 'treść',
        label: 'content',
      },
    ];

    const inputOutput = textInputs.map((params, index) => {
      return (
        <Translate key={params.label}>
          {({ translate }) => (
            <TextInput
              type={params.type}
              placeholder={translate(`placeholders.${params.label}`)}
              inputName={params.label}
              handleChange={e => this.inputChangeHandler(e, params.label)}
              changed={this.state.inputs[params.label].changed}
              valid={this.state.inputs[params.label].validity}
              value={this.state[params.label]}
            />
          )}
        </Translate>
      );
    });
    return (
      <form className={styles.form}>
        {inputOutput}
        <div className={styles.agreement}>
          <label className={styles.checkCont}>
            <input
              type="checkbox"
              className={styles.check}
              onChange={e => this.inputChangeHandler(e, 'agreement')}
            />
            <span
              className={styles.checkmark}
              style={setStyle('agreement')}
            ></span>
          </label>
          <div className={styles.agreementText}>
            <Translate id="policy" />
            <Link
              to={{ pathname: '/info', search: 'policy' }}
              className={styles.link}
            >
              Info
            </Link>
            .
          </div>
        </div>
        <Translate>
          {({ translate }) => (
            <input
              type="submit"
              className={sendButtonClasslist.join(' ')}
              value={translate(`${sendButtonValue}`)}
              onClick={e => this.submitHandler(e)}
              disabled={!this.state.formValid}
            />
          )}
        </Translate>
      </form>
    );
  }
}
export default withLocalize(ContactForm);
