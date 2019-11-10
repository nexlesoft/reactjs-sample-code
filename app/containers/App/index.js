/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from '../HomePage/Loadable';
import Huboo from '../hubooPage/Loadable';

// import Authorizer from '../../utils/injectAuthorizer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

// const AdminRoles = Authorizer(['admin'])(HomePage);

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Sample Code" defaultTitle="Dashboard">
        <meta name="description" content="Administrator Dashboard" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/huboo" component={Huboo} />
        <Route exact path="/:compName" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
