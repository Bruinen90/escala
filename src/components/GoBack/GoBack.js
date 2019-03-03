import React, { Component } from 'react';
import styles from './GoBack.module.css';
import PropTypes from 'prop-types';

class GoBack extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    render() {
        return (
            <div className={[styles.container, this.props.left && styles.left].join(' ')}>
                <span
                    onClick={this.context.router.history.goBack}>
                    powrót
                </span>
            </div>
        );
    }
}
export default GoBack;
