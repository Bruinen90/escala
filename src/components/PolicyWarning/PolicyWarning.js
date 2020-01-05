import React, { Component } from 'react';
import styles from './PolicyWarning.module.css';
import { Link } from 'react-router-dom';
import { Translate, withLocalize} from 'react-localize-redux';

import data from './data.json';

class PolicyWarning extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
  render() {
    return (
      <div className={styles.container}>
        <Translate id="warningText" />
        <Link to="/info" className={styles.link}>
          <Translate id="infoSectionLink" />
        </Link>
        .
        <div className={styles.closeIconCont} onClick={this.props.clickClose}>
          <img
            src={require('../../img/icons/close_icon.svg')}
            alt="Zamknij"
            className={styles.closeIcon}
          />
        </div>
      </div>
    );
  }
}

export default withLocalize(PolicyWarning);
