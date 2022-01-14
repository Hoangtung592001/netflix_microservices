import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children, buttonShow = true, bg = false, video = false }) {
  return (
    <Header bg={bg} video={video}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {buttonShow ? <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
