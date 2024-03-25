import './App.css'
import Header from './components/Header/Header'
import Homepage from './components/Homepage'
import { Outlet } from 'react-router-dom'

function App({ itemCount }) {

  return (
    <>
      <div className='h-dvh min-h-dvh'>
        <header className=''>
          <Header itemCount={itemCount} />
        </header>
        <main className='text-neutral-200 h-full'>
          <Outlet />
        </main>
        <h1 className="text-3xl font-bold underline">
        </h1>
      </div>
    </>
  )
}

export default App
