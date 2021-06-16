import React from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Logo } from './components/Logo'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Logo />
      <About />
    </div>
  );
}

export default App;
