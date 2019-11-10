import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cn from 'classnames';
import { Menu } from '@progress/kendo-react-layout';
import { createStructuredSelector } from 'reselect';
import history from '../../utils/history';

import { makeSelectCurrentUser } from '../../containers/App/selectors';

import { changeSelectedComponent } from '../../containers/App/actions';
import { logout } from '../Login/actions';

import saga from '../Login/saga';
import injectSaga from '../../utils/injectSaga';

import './header.scss';
import Logo from '../../images/header/logo-Nexle.png';

function TitleComponent() {
  return (
    <div className="title-1">
      <h1>Nexlesoft Samples</h1>
    </div>
  );
}

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const userName = this.props.userInfo.get('username');
    const menuItems = [
      {
        text: `Welcome ${userName}`,
        items: [
          {
            text: 'Dashboard',
            data: { name: 'dashboard', compName: 'Dashboard' },
          },
          {
            text: 'Profile',
            data: { name: 'profile', compName: 'UserProfile' },
          },
          {
            text: 'Change Password',
            data: { name: 'changePassword', compName: '' },
          },
          { text: 'Log out', data: { name: 'logOut', compName: '' } },
        ],
      },
    ];

    return (
      <div className={cn('header-wrapper')}>
        <div className={cn('header', 'container')}>
          <img src={Logo} height="88" alt="Nexle Never Stay The Same" />
          <div style={{ float: 'right' }}>
            <Menu items={menuItems} onSelect={this.handleMenuItemSelect} />
          </div>
          <div className="header-sub">{<TitleComponent />}</div>
        </div>
      </div>
    );
  }

  handleMenuItemSelect = e => {
    if (e.item.data) {
      const { name, compName } = e.item.data;
      if (name != 'logOut')
        // this.props.onMenuItemClicked(compName);
        history.push(`/${name}`);
      else {
        this.props.onUserLogOut(e);
      }
    }
  };
}

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMenuItemClicked: componentName => {
      dispatch(changeSelectedComponent(componentName));
    },
    onUserLogOut: evt => {
      dispatch(logout());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga });

// export default Header;
export default compose(
  withSaga,
  withConnect,
)(Header);
