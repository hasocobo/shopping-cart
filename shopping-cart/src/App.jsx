import { useState } from 'react'
import './App.css'
import CheckoutBar from './components/CheckoutBar'
import Header from './components/Header/Header'
import Homepage from './components/Homepage'
import { Outlet } from 'react-router-dom'



function App({ itemCount, cartItems }) {
  //dialog state
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='relative w-full'>
      <div className='h-dvh min-h-dvh z-10 w-full relative'>
        <header className='sticky'>
          <Header itemCount={itemCount} handleClick={handleIsOpen} />
        </header>
        <main className='text-neutral-200 h-full'>
          <Outlet />
        </main>
        <CheckoutBar isOpen={isOpen} handleClick={handleIsOpen} items={cartItems} />
      </div>
    </div>
  )
}

export default App
