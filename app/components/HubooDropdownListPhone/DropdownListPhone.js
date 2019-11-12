import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Image } from '..';
import './DropdownListPhone.scss';

class DropdownListPhone extends React.PureComponent {
  onCountryCodeChange(code) {
    if (this.props.onChange) {
      this.props.onChange(code);
    }
  }

  render() {
    const { className, CountryCodes, activeCode, ...rest } = this.props;
    const option = {
      className: cn('dropdown-listphone', className),
      ...rest,
    };
    const activeImage = CountryCodes.filter(c => c.code === activeCode)[0]
      .image;

    return (
      <Container {...option}>
        <div className={cn('dropdown-item', 'dropdown')}>
          <button
            className={cn('btn-dropdown', 'btn')}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Image src={activeImage} /> {activeCode}{' '}
            <i className="fa fa-caret-down" aria-hidden="true" />
          </button>
          <div
            className={cn('list-item', 'dropdown-menu')}
            aria-labelledby="dropdownMenuButton"
          >
            {(CountryCodes || [])
              .filter(i => i.countryKey.length === 2)
              .map(item => (
                <button
                  type="button"
                  className={cn('dropdown-item', 'btn-item')}
                  onClick={() => this.onCountryCodeChange(item.code)}
                  key={item.code}
                >
                  <Image src={item.image} />
                  {item.code}
                </button>
              ))}
          </div>
        </div>
      </Container>
    );
  }
}

DropdownListPhone.propTypes = {
  activeCode: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  CountryCodes: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
};

DropdownListPhone.defaultProps = {
  onChange: () => {},
  CountryCodes: null,
  activeCode: '',
};

export default DropdownListPhone;
