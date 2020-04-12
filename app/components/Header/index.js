/**
 * components/Header/index.js
 * @author Bruno Prdt
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import { Link, NavLink } from 'react-router-dom';
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
      <Img src={Banner} alt="react-boilerplate - Logo" />
      <NavBar>
        <HeaderLinkPrimary to="/search">
          <FormattedMessage {...messages.search} />
        </HeaderLinkPrimary>
        <HeaderLinkSecondary to="/details">
          <FormattedMessage {...messages.details} />
        </HeaderLinkSecondary>
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
