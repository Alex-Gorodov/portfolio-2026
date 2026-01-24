import React from 'react'
import Header from '../../Blocks/Header/Header'
import Footer from '../../Blocks/Footer/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className="page-layout">
      <Header/>
      <main className='main'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
