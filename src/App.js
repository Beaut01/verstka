import React from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Services } from './components/Services'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Logo />
      <About />
      <Services />
    </div>
  );
}

export default App;
