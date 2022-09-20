import { Route, Routes } from 'react-router-dom'
import GamePage from './pages/GamePage'
import StartPage from './pages/StartPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}></Route>
      <Route path='/Game' element={<GamePage />}></Route>
    </Routes>
  )
}

export default App
