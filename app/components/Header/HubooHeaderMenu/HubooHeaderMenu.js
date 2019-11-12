/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Container, Image } from '../..';
import Images from '../../../images';
import styles from './HubooHeaderMenu.scss';

class HubooHeaderMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClickSignin = this.onClickSignin.bind(this);
    this.onClickSignup = this.onClickSignup.bind(this);
    this.openDownloadApp = this.openDownloadApp.bind(this);
  }

  onClickSignin(e) {
    e.preventDefault();
    if (this.props.opensignin) {
      this.props.opensignin(true);
    }
  }

  onClickSignup(e) {
    e.preventDefault();
    if (this.props.opensignup) {
      this.props.opensignup(true);
    }
  }

  openDownloadApp(evt) {
    evt.preventDefault();
    if (this.props.opendownloadapp) {
      this.props.opendownloadapp(true);
    }
  }

  render() {
    const { className, ...rest } = this.props;
    const option = {
      className: cn(styles.headerMenu, className),
      ...rest,
    };

    return (
      <Container {...option}>
        <Container className={cn('hb-header-menu')} id="masterHeader">
          <Container
            className={cn(
              'header-top-menu',
              'navbar',
              'navbar-expand-lg',
              'navbar-dark',
            )}
          >
            <Container className={cn('menu', 'container-fluid')}>
              <a className={cn(styles.logo)} href="#">
                <Image src={Images.logoGreen} />
              </a>
              <button
                className={cn('navbar-toggler')}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <Container
                className={cn('nav-bar-wrapper', 'collapse', 'navbar-collapse')}
                id="navbarSupportedContent"
              >
                <Container className={cn('menu-item')}>
                  <Container className={cn('col-logo')}>
                    <a href="#">
                      <Image src={Images.logo} />
                    </a>
                  </Container>
                  <ul className={cn('right-menu')}>
                    <li>
                      <a href=" " onClick={this.openDownloadApp}>
                        Tải ứng dụng
                      </a>
                    </li>
                    <li>
                      <a href=" " onClick={this.onClickSignup}>
                        Cập nhật số điện thoại
                      </a>
                    </li>
                  </ul>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

HubooHeaderMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  opensignin: PropTypes.func,
  opensignup: PropTypes.func,
  opendownloadapp: PropTypes.func,
};

export default HubooHeaderMenu;
