import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Container = ({ children, className, noGutters, ...rest }) => {
  const containerProps = {
    className: cn(className, {
      'no-gutters': noGutters,
    }),
    ...rest,
  };

  return React.createElement('div', containerProps, children);
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
};

Container.defaultProps = {
  className: null,
  noGutters: false,
};

export default Container;
