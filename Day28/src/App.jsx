import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { store } from './components/Store'

function App() {
 const [count, setCount]= useState(0)
  return (
    <>
    <Provider store ={store}>
      <Home/>
    </Provider>
     
    </>
  )
}

export default App
