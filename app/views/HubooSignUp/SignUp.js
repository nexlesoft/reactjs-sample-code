import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import { makeSelectStatusSignupModal } from '../../containers/App/selectors';
import { openSignup } from '../../containers/App/actions';

import { Modal } from '../../components';
import SignUpModule from '../HubooSignUpModule';

class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      country: 'vi',
    };
  }

  onSubmitPhoneNumber = params => {
    toast.success(
      `Demo success message, send data with params: Phone number: ${
        params.phoneNumber
      }, country: ${params.country}`,
    );
  };

  render() {
    const { country } = this.state;
    const { isOpen, onCloseSignUpModal } = this.props;
    return (
      <Modal
        styles={{
          modal: { padding: 0 },
          overlay: { zIndex: 1000 },
          closeIcon: { top: 8, right: 8 },
        }}
        isOpen={isOpen}
        onClose={onCloseSignUpModal}
        closeOnOverlayClick
        closeOnEsc
        showCloseIcon={false}
      >
        <SignUpModule
          onClose={onCloseSignUpModal}
          onSubmit={params => this.onSubmitPhoneNumber(params)}
          country={country}
        />
      </Modal>
    );
  }
}

SignUp.propTypes = {
  isOpen: PropTypes.bool,
  onCloseSignUpModal: PropTypes.func,
};

SignUp.defaultProps = {
  isOpen: false,
  onCloseSignUpModal: () => {},
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectStatusSignupModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    onOpenSignUpModal: () => {
      dispatch(openSignup(true));
    },
    onCloseSignUpModal: () => {
      dispatch(openSignup(false));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUp);
