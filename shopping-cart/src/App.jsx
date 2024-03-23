import './App.css'
import Header from './components/Header/Header'
import Homepage from './components/Homepage'

function App() {

  return (
    <>
      <div className='bg-neutral-50 h-dvh min-h-dvh bg-image'>
        <header className=''>
          <Header />
        </header>
        <main className='text-neutral-200 h-full'>
          <Homepage text={"Your headphone store"} />
        </main>
        <h1 className="text-3xl font-bold underline">
        </h1>
      </div>
    </>
  )
}

export default App
