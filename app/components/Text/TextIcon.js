import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import cn from 'classnames';

const TextIcon = ({
                    className,
                    children,
                    iconClass,
                    ...rest
                  }) => {
  const options = {
    className: cn(className),
    children,
    ...rest,
  };
  return React.createElement('span', { ...options }, [<Icon className={cn(iconClass, 'pr-1')} key="icon" />, children]);
};

TextIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconClass: PropTypes.string,
};

TextIcon.defaultProps = {
  className: null,
  iconClass: 'fa fa-exclamation-triangle',
};

export default TextIcon;
