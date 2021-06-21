import React from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Price } from './components/Price'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Works } from './components/Works'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Logo />
      <About />
      <Services />
      <Works />
      <Price />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
