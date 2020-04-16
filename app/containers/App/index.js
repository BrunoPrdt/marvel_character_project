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
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import CharacterDetailsPage from 'containers/CharacterDetailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CharactersPage from 'containers/CharactersPage/Loadable';
import SwipeableTemporaryDrawer from '../../components/SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';
import ContactPage from '../ContactPage';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1280px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Marvel's Characters"
        defaultTitle="Marvel's Characters"
      >
        <meta name="description" content="A Marvel application" />
      </Helmet>
      <SwipeableTemporaryDrawer />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={CharactersPage} />
        <Route path="/about" component={FeaturePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/characterbyid/:id" component={CharacterDetailsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
