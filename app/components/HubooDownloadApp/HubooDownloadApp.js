import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Image, Text } from '..';
import './HubooDownloadApp.scss';
import Images from '../../images';

class HubooDownloadApp extends React.PureComponent {
  render() {
    const { className, onClose, ...rest } = this.props;
    const option = {
      className: cn('popup-download-app', className),
      ...rest,
    };

    return (
      <Container {...option}>
        <Container className={cn('close-pu')}>
          <button type="button" className={cn('paBtn')} onClick={onClose}>
            <Image src={Images.hubooIcClosePu} alt="" />
          </button>
        </Container>
        <Container className={cn('fl', 'mgtop')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-12')}>
              <Container className={cn('row-img', 'fl')}>
                <Image src={Images.hubooLogoPu} />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={cn('fl', 'mgtop')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-12')}>
              <Container className={cn('row-text', 'fl')}>
                <Text className={cn('title-hoboopu', 'fl')}>
                  Tải ngay ứng dụng HUBOO
                </Text>
                <Text className={cn('text-hoboopu', 'fl')}>
                  để sử dụng đầy đủ chức năng
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={cn('fl', 'mgtop')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-6')}>
              <Container className={cn('col-images')}>
                <Image src={Images.hubooIcIos} />
              </Container>
            </Container>
            <Container className={cn('col-md-6')}>
              <Container className={cn('col-images')}>
                <Image src={Images.hubooIcAndroid} />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={cn('fl', 'mgtop')}>
          <Container className={cn('row')}>
            <Container className={cn('col-md-6')}>
              <Container className={cn('col-images')}>
                <Image src={Images.hubooIcQr} />
              </Container>
            </Container>
            <Container className={cn('col-md-6')}>
              <Container className={cn('col-images')}>
                <Image src={Images.hubooIcQr} />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

HubooDownloadApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default HubooDownloadApp;
