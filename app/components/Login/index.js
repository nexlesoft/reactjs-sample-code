import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './login.scss';
import { createStructuredSelector } from 'reselect';

import { Button } from '@progress/kendo-react-buttons';
import { validateUser, userInfoChanges } from './actions';
import { userInfoModel } from '../../models/userinfos';
import { makeSelectCurrentUser } from '../../containers/App/selectors';

import injectSaga from '../../utils/injectSaga';

import saga from './saga';


const ButtonWrapper = styled.div`
  text-align: right;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const username = this.props.userInfo.get('username');
    const password = this.props.userInfo.get('password');

    let invalidUserNameFieldMsg = '';
    let invalidPasswordFieldMsg = '';

    let validCount = 0;
    if (username === '' || username === undefined) {
      invalidUserNameFieldMsg = <span style={{ color: 'red' }}>&nbsp;**</span>;
      validCount += 1;
    } else {
      invalidUserNameFieldMsg = '';
    }

    if (password === '' || password == undefined) {
      invalidPasswordFieldMsg = <span style={{ color: 'red' }}>&nbsp;**</span>;
      validCount += 1;
    } else {
      invalidPasswordFieldMsg = '';
    }

    let disableLoginBt = false;
    if (validCount != 0) disableLoginBt = true;

    return (
      <div className="login-container">
        <div className="card">
          <div className="card-block">
            <form className="k-form">
              <fieldset>
                <legend className="bigger">
                  <h3>Login</h3>
                </legend>
                <label className="k-form-field normal-text">
                  <span>
                    Username
                    {invalidUserNameFieldMsg}
                  </span>
                  <input
                    className="k-textbox"
                    placeholder=""
                    value={this.props.userInfo.username}
                    data-fieldname="username"
                    onChange={this.props.onUserInfoChanged}
                  />
                </label>
                <label className="k-form-field normal-text">
                  <span>
                    Password
                    {invalidPasswordFieldMsg}
                  </span>
                  <input
                    type="password"
                    className="k-textbox"
                    placeholder=""
                    value={this.props.userInfo.password}
                    data-fieldname="password"
                    onChange={this.props.onUserInfoChanged}
                  />
                </label>
              </fieldset>
              <ButtonWrapper>
                <Button
                  disabled={disableLoginBt}
                  className="mt-3"
                  type="button"
                  primary
                  onClick={evt => {
                    this.onUserLogin(evt);
                  }}
                >
                  Login
                </Button>
              </ButtonWrapper>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onUserLogin(evt) {
    const username = this.props.userInfo.get('username');
    const password = this.props.userInfo.get('password');
    this.props.onUserLogin(evt, username, password);
  }
}

Login.propTypes = {
  // username: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
  onUserLogin: PropTypes.func,
};

Login.defaultProps = {
  userInfo: userInfoModel,
};

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUserInfoChanged: evt => {
      const fieldName = evt.target.dataset.fieldname;
      dispatch(userInfoChanges(fieldName, evt.target.value));
    },
    onUserLogin: (evt, username, password) => {
      dispatch(validateUser(username, password));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withSaga,
  withConnect,
)(Login);
