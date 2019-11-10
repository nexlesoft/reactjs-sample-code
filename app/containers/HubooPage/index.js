/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from '../../components/Header';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
// import messages from './messages';

import { makeSelectCurrentCompShown } from '../App/selectors';

//= =====dynamic components
import Landing from '../../components/huboo/landing';
//-------------

import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Huboo HLV Esports</title>
          <meta name="description" content="Huboo HLV Esports" />
        </Helmet>
        <Landing />
      </div>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  currentCompShown: makeSelectCurrentCompShown(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'huboo', reducer });
const withSaga = injectSaga({ key: 'huboo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
