/**
 * components/Header/index.js
 * @author Bruno Prdt
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import { Link, NavLink } from 'react-router-dom';
import Img from './Img';
import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import HeaderLinkPrimary from './HeaderLinkPrimary';
import HeaderLinkSecondary from './HeaderLinkSecondary';
import Banner from './banner.jpg';
import messages from './messages';
// import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <Img src={Banner} alt="react-boilerplate - Logo" />
      <NavBar>
        {/* <NavLink to="/"> */}
        <HeaderLinkSecondary to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLinkSecondary>
        <HeaderLinkSecondary to="/search">
          <FormattedMessage {...messages.search} />
        </HeaderLinkSecondary>
        {/* </NavLink> */}
        <HeaderLinkSecondary to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLinkSecondary>
      </NavBar>
    </div>
  );
}

export default Header;
