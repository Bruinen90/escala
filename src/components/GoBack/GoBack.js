import React, { Component } from 'react';
import styles from './GoBack.module.css';
import PropTypes from 'prop-types';

class GoBack extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    render() {
        return (
            <div
                className={styles.container}
                onClick={this.context.router.history.goBack}
            >
                powrót
            </div>
        );
    }
}
export default GoBack;
