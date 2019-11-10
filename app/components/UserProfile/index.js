import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { Button } from '@progress/kendo-react-buttons';
import { makeSelectCurrentUser } from '../../containers/App/selectors';
import { userInfoChanges, validateUser } from '../Login/actions';

import saga from './saga';
import injectSaga from '../../utils/injectSaga';

const ButtonWrapper = styled.div`
  text-align: right;
`;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userInfo = this.props.userInfo.toJS();
    return (
      <div className="row example-wrapper">
        <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
          <div className="card">
            <div className="card-block">
              <form className="k-form">
                <fieldset>
                  <legend>User Details</legend>

                  <label className="k-form-field">
                    <span>First Name</span>
                    <input className="k-textbox" placeholder="Your Name" value={userInfo.firstName}
                           data-fieldname="firstName"
                           onChange={this.props.onUserInfoChanged}/>
                  </label>
                  <label className="k-form-field">
                    <span>Last Name</span>
                    <input className="k-textbox" placeholder="Your Last Name" value={userInfo.lastName}
                           data-fieldname="lastName"
                           onChange={this.props.onUserInfoChanged}/>
                  </label>
                  <div className="k-form-field">
                    <span>Gender</span>

                    <input type="radio" name="gender" id="female" className="k-radio"/>
                    <label className="k-radio-label" htmlFor="female">Female</label>

                    <input type="radio" name="gender" id="male" className="k-radio" checked="checked" onChange={() => {
                    }}/>
                    <label className="k-radio-label" htmlFor="male">Male</label>
                  </div>
                  <label className="k-form-field">
                    <span>Email <span className="k-required">*</span></span>
                    <input type="email" className="k-textbox" placeholder="Your Email"/>
                  </label>
                  <label className="k-form-field">
                    <span>Company<span className="k-field-info">optional</span></span>
                    <input className="k-textbox" placeholder="Your Company"/>
                  </label>
                </fieldset>

                <fieldset>
                  <legend>Credentials</legend>
                  <label className="k-form-field">
                    <span>Username</span>
                    <input className="k-textbox" placeholder="Your username" readOnly={true} value={userInfo.username}/>
                  </label>
                </fieldset>

                <ButtonWrapper>
                  <button type="button" className="k-button">Cancel</button>
                  &nbsp;
                  <button type="button" className="k-button k-primary">Submit</button>
                </ButtonWrapper>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUserInfoChanged: evt => {
      const fieldName = evt.target.dataset.fieldname;
      if (fieldName !== undefined)
        dispatch(userInfoChanges(fieldName, evt.target.value));
    },
    onUserLogin: (evt, username, password) => {
      dispatch(validateUser(username, password));
    },
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);


const withSaga = injectSaga({ key: 'userProfile', saga });


export default compose(
  withSaga,
  withConnect,
)(UserProfile);
