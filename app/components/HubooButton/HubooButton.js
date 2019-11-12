import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container } from '..';
import './HubooButton.scss';

class HubooButton extends React.PureComponent {
  render() {
    const { className, name, onClick, ...rest } = this.props;
    const option = {
      className: cn('btn-scale', className),
      ...rest,
    };

    return (
      <Container {...option}>
        <Container className={cn('btn-s-green', 'btn-green-bg')}>
          <button type="button" onClick={onClick}>
            {name || 'Xem Them'}
          </button>
        </Container>
      </Container>
    );
  }
}

HubooButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

HubooButton.defaultProps = {
  name: 'Xem Thêm',
  onClick: () => {},
};

export default HubooButton;
