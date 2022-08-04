import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}></Route>
    </Routes>
  )
}

export default App
