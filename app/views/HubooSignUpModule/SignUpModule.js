import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { toast } from 'react-toastify';
import { Container, Image, Text, TextInput } from '../../components';
import DropdownListPhone from '../../components/HubooDropdownListPhone';
import { isEmpty, validatePhoneNumber } from '../../utils/functions';
import { CountryCodes } from './constants';
import HubooButton from '../../components/HubooButton';
import Images from '../../images';
import './SignUpModule.scss';

class SignUpModule extends React.PureComponent {
  constructor(props) {
    super(props);
    const { country } = this.props;
    if (!isEmpty(country)) {
      const { code } = CountryCodes.filter(c => c.countryKey === country)[0];
      this.state = {
        phoneNumber: '',
        countryCode: code,
      };
    }
  }

  onSubmit() {
    const params = this.validatePhoneInputs();
    if (params && this.props.onSubmit) {
      return this.props.onSubmit(params);
    }
    return null;
  }

  validatePhoneInputs() {
    const { phoneNumber, countryCode } = this.state;
    if (isEmpty(phoneNumber)) {
      toast.error('Xin vui lòng nhập số điện thoại của bạn!');
      return false;
    }
    const fullPhoneNumber = validatePhoneNumber(phoneNumber, countryCode);
    if (!fullPhoneNumber) {
      toast.error('Số điện thoại không đúng, xin vui lòng nhập lại!');
      return false;
    }

    const { countryKey } = CountryCodes.filter(c => c.code === countryCode)[0];

    return {
      phoneNumber: fullPhoneNumber,
      country: countryKey,
    };
  }

  countryCodeChange(code) {
    this.setState({ countryCode: code });
  }

  render() {
    const { className, onClose, ...rest } = this.props;
    const option = {
      className: cn('signup-module-email', className),
      ...rest,
    };
    const { phoneNumber, countryCode } = this.state;
    return (
      <Container {...option}>
        <Container className="top-pu">
          <Text className="title-signup">Cập nhật số điện thoại</Text>
          <Container className="icon-close">
            <button type="button" onClick={onClose} className="paBtn">
              <Image src={Images.hubooIcClosePu} />
            </button>
          </Container>
        </Container>
        <Container className={cn('fl')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-12', 'text-center')}>
              <Text className="text-content-signup">
                {` Vui lòng cung cấp số điện thoại để tăng tính bảo mật cho tài khoản Huboo.`}
              </Text>
            </Container>
          </Container>
        </Container>
        <Container className={cn('col-drop-phone', 'fl')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-4', 'pNright')}>
              <DropdownListPhone
                CountryCodes={CountryCodes}
                activeCode={
                  countryCode ||
                  CountryCodes.filter(i => i.active === true)[0].code
                }
                onChange={code => this.countryCodeChange(code)}
              />
            </Container>
            <Container className={cn('col-md-8', 'pNleft')}>
              <Container className="input-phone">
                <Container
                  className={cn('col-phone', 'input-group', 'm-b', 'fload')}
                >
                  <Text className={cn('input-group-addon')}>
                    <Image src={Images.icPhoneHuBoo} />
                  </Text>
                  <TextInput
                    type="text"
                    placeholder="Số điện thoại"
                    className={cn('row-input', 'form-control')}
                    value={phoneNumber}
                    input={r => {
                      this.txtPhoneNumber = r;
                    }}
                    onChange={e =>
                      this.setState({ phoneNumber: e.target.value })
                    }
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={cn('fl', 'mgtop')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-12')}>
              <Container className={cn('col-btn-login', 'fl')}>
                <HubooButton onClick={() => this.onSubmit()} name="Tiếp tục" />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

SignUpModule.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  country: PropTypes.string,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

SignUpModule.defaultProps = {
  country: 'vi',
};

export default SignUpModule;
