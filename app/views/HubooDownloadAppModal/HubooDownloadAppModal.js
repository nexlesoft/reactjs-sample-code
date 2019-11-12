import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectStatusDownloadModal } from '../../containers/App/selectors';
import { openDownLoadAppModel } from '../../containers/App/actions';

import { Modal } from '../../components';
import DownloadApp from '../../components/HubooDownloadApp';

class HubooDownloadAppModal extends React.PureComponent {
  render() {
    const { isOpen } = this.props;

    return (
      <Modal
        styles={{
          modal: { padding: 0 },
          overlay: { zIndex: 1000 },
          closeIcon: { top: 8, right: 8 },
        }}
        isOpen={isOpen}
        onClose={this.props.onCloseDownloadApp}
        closeOnOverlayClick
        closeOnEsc
        showCloseIcon={false}
      >
        <DownloadApp onClose={this.props.onCloseDownloadApp} />
      </Modal>
    );
  }
}

HubooDownloadAppModal.propTypes = {
  isOpen: PropTypes.bool,
  onCloseDownloadApp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectStatusDownloadModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCloseDownloadApp: () => {
      dispatch(openDownLoadAppModel(false));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HubooDownloadAppModal);
