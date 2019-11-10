/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Container, Image } from '../..';
import Images from '../../../images/huboo';
import styles from './headerMenu.scss';

class HeaderMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollNav: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.onClickSignin = this.onClickSignin.bind(this);
    this.onClickSignup = this.onClickSignup.bind(this);
    this.onDownloadAppOpen = this.onDownloadAppOpen.bind(this);
  }

  componentWillMount() {
    this.handleScroll();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const headerHeight = 250;
    const scrollTop = window.scrollY;
    const { scrollNav } = this.state;
    const overlay = document.getElementsByClassName('modal-overlay'); // Trick fix scroll hide when popup showing.

    if (scrollTop >= headerHeight) {
      if (!scrollNav && overlay.length === 0) {
        this.setState({ scrollNav: true });
      }
    } else {
      if (scrollNav && overlay.length === 0) {
        this.setState({ scrollNav: false });
      }
    }
  }

  onClickSignin(e) {
    e.preventDefault();
    if (this.props.openSignin) {
      this.props.openSignin();
    }
  }

  onClickSignup(e) {
    e.preventDefault();
    if (this.props.openSignup) {
      this.props.openSignup();
    }
  }

  onDownloadAppOpen(evt) {
    evt.preventDefault();
    this.props.onDownloadAppOpen();
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
                className={cn('navbar', 'collapse', 'navbar-collapse')}
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
                      <a href=" " onClick={this.onClickSignin}>
                        Trở thành huấn luyện viên
                      </a>
                    </li>
                    <li>
                      <a href=" " onClick={this.onDownloadAppOpen}>
                        Tải ứng dụng
                      </a>
                    </li>
                    <li>
                      <a href=" " onClick={this.onClickSignin}>
                        Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a href=" " onClick={this.onClickSignup}>
                        Đăng ký
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

HeaderMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onLogout: PropTypes.func,
  logininfo: PropTypes.objectOf(PropTypes.any),
  isHubooStar: PropTypes.bool,
  openSignin: PropTypes.func,
  openSignup: PropTypes.func,
  country: PropTypes.string,
  avatar: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default HeaderMenu;
