import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import './landing.scss';
import { createStructuredSelector } from 'reselect';

import { Container } from '../..';
import Header from '../Header';
import Footer from '../Footer';

class Landing extends React.PureComponent {
  render() {
    const { userInfo } = this.props;
    console.log(userInfo);

    return (
      <Container className="hb-landing">
        <Header />
        <Footer />
      </Container>
    );
  }
}

Landing.propTypes = {
  userInfo: PropTypes.object,
};

Landing.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  // userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUserInfoChanged: evt => {
      // const fieldName = evt.target.dataset.fieldname;
      // dispatch(userInfoChanges(fieldName, evt.target.value));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Landing);
