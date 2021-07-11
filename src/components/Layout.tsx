import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global';
import GlobalFonts from '../styles/fonts';
import NavBar from './NavBar';
import TopHeader from './TopHeader';
import Footer from './Footer';

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <TopHeader />
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
