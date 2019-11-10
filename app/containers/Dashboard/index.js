import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import { Menu } from '@progress/kendo-react-layout';
import { createStructuredSelector } from 'reselect';
import history from '../../utils/history';

class Dashboard extends React.PureComponent {
  render() {
    return <div style={{ fontWeight: 'bold' }}>Main dashboard</div>;
  }
}

export default Dashboard;
