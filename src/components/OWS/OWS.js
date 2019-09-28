import React, { Component } from 'react';
import Rules from '../../containers/Rules/Rules';

import { Translate, withLocalize } from 'react-localize-redux';

import data from './data.json';

class OWS extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(data);
  }
  render() {
    return (
      <Rules>
        <h2>
          <Translate id="mainHeader" />
        </h2>
        <Translate id="mainSubheader" />
        <h3>
          <Translate id="definitionsHeader" />
        </h3>
        {Object.keys(data['definitions']).map(id => (
          <p key={id}>
            <Translate id={`definitions.${id}`} />
          </p>
        ))}
        <h2>
          <Translate id="generalConditionsHeader" />
        </h2>
        <ol>
          {Object.keys(data['general-conditions']).map(id => (
            <li key={id}>
              <Translate id={`general-conditions.${id}`} />
            </li>
          ))}
        </ol>
        <h2>
          <Translate id="warrantyMainHeader" />
        </h2>
        <h3>
          <Translate id="warrantyHeader" />{' '}
        </h3>
        <Translate id="warrantySubheader" />
        <ul>
          {Object.keys(data['warranty']).map(id => (
            <li key={id}>
              <Translate id={`warranty.${id}`} />
            </li>
          ))}
        </ul>
        <h2>
          <Translate id="complaintHeader" />
        </h2>
        <ul>
          {Object.keys(data['complaint']).map(id => (
            <li key={id}>
              <Translate id={`complaint.${id}`} />
            </li>
          ))}
        </ul>
      </Rules>
    );
  }
}

export default withLocalize(OWS);
