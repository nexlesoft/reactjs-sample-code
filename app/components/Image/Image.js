import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt = '', className, ...rest }) => {
  const options = {
    src,
    alt,
    className,
    ...rest,
  };
  return React.createElement('img', { ...options });
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
