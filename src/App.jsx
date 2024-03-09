import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;