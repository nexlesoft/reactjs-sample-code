/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

import HubooLanding from '../../views/HubooLanding';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Huboo HLV Esports</title>
          <meta name="description" content="Huboo HLV Esports" />
        </Helmet>
        <HubooLanding />
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
