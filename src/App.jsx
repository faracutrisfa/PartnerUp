import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
    </Router>
  )
}

export default App;