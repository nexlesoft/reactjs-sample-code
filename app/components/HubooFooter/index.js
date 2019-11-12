import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Container, Image, Text } from '..';

import './HubooFooter.scss';
import Images from '../../images';

/* eslint-disable react/prefer-stateless-function */
class HubooFooter extends React.PureComponent {
  render() {
    return (
      <Container className="footer-page">
        <Container className="blue-line">
          <Container className="container">
            <Container className="row">
              <Container className="col-12 col-sm-12 col-md-12">
                <Container className={cn('col-footer', 'fl')}>
                  <Container className="footer-menu">
                    <Container className="container">
                      <Container className="row">
                        <Container className="col-12 col-sm-12 col-md-9">
                          <Image className="img" src={Images.hubooLogoFooter} />
                          <Text>© 2018 Huboo.</Text>
                          <Text className="hidden-sm-down">|</Text>
                          <Text>
                            <NavLink to="">Các điều khoản và điều kiện</NavLink>
                          </Text>
                          <Text className="hidden-sm-down">|</Text>
                          <Text>
                            <NavLink to="">FAQ</NavLink>
                          </Text>
                        </Container>
                        <Container className="col-12 col-sm-12 col-md-3">
                          <Container className="footer-icon">
                            <a
                              target="_blank"
                              href="mailto:info@huboo.com"
                              rel="noreferrer noopener"
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/hubooapp/"
                              rel="noreferrer noopener"
                            >
                              <i
                                className="fa fa-facebook-square"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.youtube.com/channel/UChUvPMkKbndsfNOU3RuKLYQ"
                              rel="noreferrer noopener"
                            >
                              <i
                                className="fa fa-youtube-play"
                                aria-hidden="true"
                              />
                            </a>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default HubooFooter;
