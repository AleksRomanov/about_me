import React from 'react';
import Header from '../Assets/Header/Header';
import Footer from '../Assets/Footer/Footer';

// @ts-ignore
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>

    </>
  )
}

export default Layout;
