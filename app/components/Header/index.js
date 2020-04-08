import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
// import { Link, NavLink } from 'react-router-dom';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderLinkPrimary from './HeaderLinkPrimary';
import HeaderLinkSecondary from './HeaderLinkSecondary';
import Banner from './banner.jpg';
import messages from './messages';
// import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLinkPrimary to="search">Search</HeaderLinkPrimary>
        <HeaderLinkSecondary to="search">SearchBis</HeaderLinkSecondary>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        {/* <NavLink to="/"> */}
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        {/* </NavLink> */}
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
