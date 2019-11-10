import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Login from '../components/Login';
import { makeSelectCurrentUser } from '../containers/App/selectors';

const UnAuthorizeBlock = styled.div`
  font-weight: bold;
  color: red;
`;

export default roles => WrappedComponent => {
  class Authorizer extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextTypes = {
      store: PropTypes.object.isRequired,
    };

    componentWillMount() {
      // TODO: doing something to get the roles
    }

    render() {
      // TODO: for testing purpose only
      let userRoles = [];
      if (this.props.userInfo) {
        const loadedRoles = this.props.userInfo.get('roles');
        if (loadedRoles !== undefined) userRoles = [...loadedRoles.values()];
      }
      let hasPerm = false;
      for (const index in userRoles) {
        if (roles.includes(userRoles[index])) {
          hasPerm = true;
          break;
        }
      }
      if (hasPerm) {
        // TODO: 'admin' is for testing purpose only!!!
        return <WrappedComponent {...this.props} />;
      }
      // don't have permission to access
      return (
        <UnAuthorizeBlock>
          <Login />
        </UnAuthorizeBlock>
      );
    }
  }

  Authorizer.propTypes = {
    user: PropTypes.shape({
      role: PropTypes.string,
    }),
  };

  Authorizer.defaultProps = {
    user: {
      role: 'anonymous',
    },
  };

  const mapStateToProps = createStructuredSelector({
    userInfo: makeSelectCurrentUser(),
  });

  const withConnect = connect(mapStateToProps);

  const wrapper = compose(withConnect)(Authorizer);

  // return hoistNonReactStatics(Authorizer, WrappedComponent);
  return hoistNonReactStatics(wrapper, WrappedComponent);
};
