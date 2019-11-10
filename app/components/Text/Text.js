import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Text = ({
                children,
                component,
                className,
                ...rest
              }) => {
  const options = {
    className: cn(`com-text-${component}`, className), //
    ...rest,
  };
  return React.createElement(component, { ...options }, children);
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'label']),
};

Text.defaultProps = {
  component: 'span',
  className: null,
};

export default Text;
