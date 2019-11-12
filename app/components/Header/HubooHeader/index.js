import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cn from 'classnames';
import { createStructuredSelector } from 'reselect';

import {
  openDownLoadAppModel,
  openSignup,
} from '../../../containers/App/actions';

import { Container } from '../..';
import HubooHeaderMenu from '../HubooHeaderMenu';
import './header.scss';

/* eslint-disable react/prefer-stateless-function */
class HubooHeader extends React.PureComponent {
  render() {
    return (
      <Container className="hb-header">
        <Container className="container-fluid">
          <Container className="row">
            <Container className={cn('col-12', 'col-sm-12', 'col-md-12')}>
              <HubooHeaderMenu
                {...this.props}
                className="headerLanding"
                opendownloadapp={isOpen => this.props.onOpenDownloadApp(isOpen)}
                opensignup={isOpen => this.props.onOpenSignup(isOpen)}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

HubooHeader.propTypes = {
  onOpenDownloadApp: PropTypes.func,
  onOpenSignup: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onOpenDownloadApp: () => {
      dispatch(openDownLoadAppModel(true));
    },
    onOpenSignup: () => {
      dispatch(openSignup(true));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HubooHeader);
