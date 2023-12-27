import { BrowserRouter } from 'react-router-dom'
import Router from './components/router/router'
import './App.css'
import { JusticeProvider } from './components/justiceContext'

function App() {
  return (
    <>
    <BrowserRouter>
    <JusticeProvider>
      <Router/>
    </JusticeProvider>
    </BrowserRouter>      
    </>
  )
}

export default App
