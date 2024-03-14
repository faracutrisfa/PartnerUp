import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPages from './pages/LandingPages';
import Why from './components/DestinationPage/Why';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages />}></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/why' element={<Why/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;