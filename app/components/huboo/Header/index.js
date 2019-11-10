import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cn from 'classnames';
import { createStructuredSelector } from 'reselect';

import { Container } from '../..';
import HeaderMenu from '../HeaderMenu';
import './header.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Container className="hb-header">
        <Container className="container-fluid">
          <Container className="row">
            <Container className={cn('col-12', 'col-sm-12', 'col-md-12')}>
              <HeaderMenu {...this.props} className="headerLanding" />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMenuItemClicked: componentName => {
      // dispatch(changeSelectedComponent(componentName));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// export default Header;
export default compose(withConnect)(Header);
