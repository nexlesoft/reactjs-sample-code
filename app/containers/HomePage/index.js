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

import Header from '../../components/Header/Header';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
// import messages from './messages';

import { makeSelectCurrentCompShown } from '../App/selectors';

//= =====dynamic components

//-------------

import reducer from './reducer';
import saga from './saga';
import Images from '../../images';

const dynamicComponents = {};

function HomeItem() {
  return (
    <div className="card" style={{ width: '18em', margin: '10px' }}>
      <img src={Images.hubooThumbnail} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Huboo</h5>
        <p className="card-text">
          HLV Esports - việc tìm kiếm những người chơi có trình độ cao để chơi
          cùng và được hướng dẫn cải thiện kỹ năng。
        </p>
        <a href="/huboo" className="btn btn-primary">
          View Demo
        </a>
      </div>
    </div>
  );
}

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
        <HomeItem />
      </div>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentCompShown: makeSelectCurrentCompShown(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'reducerHome', reducer });
const withSaga = injectSaga({ key: 'sagaHome', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
