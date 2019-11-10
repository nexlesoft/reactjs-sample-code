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
import UserProfile from '../../components/UserProfile';
import Dashboard from '../Dashboard';
//-------------

import reducer from './reducer';
import saga from './saga';

const dynamicComponents = {
  profile: UserProfile,
  dashboard: Dashboard,
};

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { params } = this.props.match;
    let DynComp = '';
    const currentCompName = params.compName;
    if (currentCompName !== undefined && currentCompName !== '') {
      let Found = null;
      // eslint-disable-next-line no-restricted-syntax
      for (const prop in dynamicComponents) {
        if (prop.toLowerCase() === currentCompName.toLowerCase()) {
          Found = dynamicComponents[prop];
          break;
        }
      }
      if (Found) DynComp = React.createElement(Found);
      // React.createElement(dynamicComponents[currentCompName]);
      else DynComp = <span />;
    } else DynComp = <span />;
    return (
      <div>
        <Helmet>
          <title>React Administrator Dashboard</title>
          <meta
            name="description"
            content="React Administrator Dashboard template"
          />
        </Helmet>
        <Header />
        <div>{DynComp}</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

// export function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//     // ---------------------
//     onSendRequestBundle: evt => {
//       dispatch(sendRequestBundle(5));
//     },
//   };
// }

const mapStateToProps = createStructuredSelector({
  currentCompShown: makeSelectCurrentCompShown(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'fhome', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
