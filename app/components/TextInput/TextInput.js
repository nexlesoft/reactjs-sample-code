import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class TextInput extends React.PureComponent {
  render() {
    const {
      className,
      locked,
      placeholder,
      onChange,
      value,
      type,
      ...rest
    } = this.props;
    rest.input = undefined;
    const options = {
      className: cn(className, 'com-input'), //
      disabled: locked,
      type: type || 'text',
      placeholder,
      onChange,
      ...rest,
    };
    return (
      <input
        {...options}
        ref={this.props.input}
        pattern="[^\-]+"
        value={this.props.value}
      />
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  input: PropTypes.func,
  locked: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  className: null,
  locked: false,
  placeholder: null,
  onChange: null,
};

export default TextInput;
