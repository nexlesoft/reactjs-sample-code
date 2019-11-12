import React from 'react';

import Container from '../../components/Container';
import HubooHeader from '../../components/Header/HubooHeader';
import HubooFooter from '../../components/HubooFooter';

import './landing.scss';

const HubooLanding = () => (
  <Container className="hb-landing">
    <HubooHeader />
    <HubooFooter />
  </Container>
);

export default HubooLanding;
