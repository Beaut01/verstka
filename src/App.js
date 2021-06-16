import React from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Price } from './components/Price'
import { Services } from './components/Services'
import { Works } from './components/Works'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Logo />
      <About />
      <Services />
      <Works />
      <Price />
    </div>
  );
}

export default App;
