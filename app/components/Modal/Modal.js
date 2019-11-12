/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveModal from 'react-responsive-modal';
import styles from './Modal.scss';
import cn from 'classnames';

const Modal = ({ isOpen, children, ...rest }) => {
  const option = {
    open: isOpen,
    ...rest,
  };
  const overlayStyle =
    option.classNames && option.classNames.overlay
      ? option.classNames.overlay
      : 'modal-overlay';
  return (
    <ResponsiveModal
      {...option}
      className={cn('com-modal-container')}
      classNames={{
        ...option.classNames,
        modal: 'modal-container',
        overlay: overlayStyle,
      }}
    >
      {children}
    </ResponsiveModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  children: '',
  isOpen: false,
};

export default Modal;
