import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'

function Layout({children}) {
  return (
    <div>
      <Header/>
      <main style={
        {
          minHeight:'80vh',
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto 50px'
        }}
      >{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
