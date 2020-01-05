import React, { Component } from 'react';
import Rules from '../../containers/Rules/Rules';

import { Translate, withLocalize } from 'react-localize-redux';

import data from './data.json';

import CookiesPolicy from '../CookiesPolicy/CookiesPolicy';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(data);
    this.state = {
      activeLang: this.props.activeLanguage,
    };
  }

  componentDidMount() {
    this.setState({ activeLang: this.props.activeLanguage });
    console.log(this.state.activeLang);
  }

  render() {
    return (
      <Rules>
        <h2>
          <Translate id="privacyHeader" />
        </h2>
        <ol>
          <li>
            <Translate id="privacyAdminTop" />
            <p>
              <Translate id="privacyAdminAddress" />{' '}
              <a href="mailto: info@escalapoland.com">info@escalapoland.com</a>.
            </p>
          </li>
          {Object.keys(data['privacy']).map(id => (
            <li key={id}>
              <Translate id={`privacy.${id}`} />
            </li>
          ))}
        </ol>
        <CookiesPolicy />
      </Rules>
    );
  }
}

export default withLocalize(PrivacyPolicy);
