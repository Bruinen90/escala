import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

const API_PATH = 'http://woloveburgers.pl/api/contact/index.php';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        content: '',
        agreement: false,
        sent: false,
        error: null,
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            console.log(result)
          this.setState({
            sent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
    }
    render() {
        return (
            <form className={styles.form}>
                <input
                    type="text"
                    placeholder="imię i nazwisko / firma"
                    required={true}
                    onChange={(e) => this.setState({name: e.target.value})}
                />
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => this.setState({email: e.target.value})}
                    required
                />
                <input
                    type="phone"
                    placeholder="numer telefonu"
                    onChange={(e) => this.setState({phone: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="temat"
                    onChange={(e) => this.setState({topic: e.target.value})}
                />
                <textarea
                    placeholder="treść"
                    className={styles.message}
                    onChange={(e) => this.setState({content: e.target.value})}
                />
                <div className={styles.agreement}>
                    <label className={styles.checkCont}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            required
                            onChange={(e) => this.setState({agreement: e.target.checked})}
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.agreementText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt necessitatibus, harum modi eos repellat excepturi dolorem, ratione nostrum sapiente corporis sed, corrupti, perspiciatis odio quo suscipit. Labore, explicabo, optio.
                    </div>
                </div>
                <input
                    type="submit"
                    className={this.state.sent ? [styles.button, styles.sent].join(' ') : styles.button}
                    value={this.state.sent ? 'Wysłano' : 'Wyślij'}
                    onClick={(e) => this.submitHandler(e)}
                />
            </form>
        );
    }
}
export default ContactForm;
