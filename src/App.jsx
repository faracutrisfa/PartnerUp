import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPages from './pages/LandingPages';
import BiodataPage from './pages/BiodataPages';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages />}></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/biodata' element={<BiodataPage />}></Route>
        <Route path='/main' element={<MainPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;