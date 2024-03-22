import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPages from './pages/LandingPages';
import BiodataPage from './pages/BiodataPages';
import MainPage from './pages/MainPage';
import RekomendasiPartner from './pages/RekomendasiPartner';
import Komunitas from './pages/Komunitas';
import Chat from './pages/Chat';
import Notification from './pages/Notifications';
import Premium from './pages/Premium';
import Profiles from './pages/Profiles';
import UpdateProfile from './pages/UpdateProfile';
import ProfilePartner from './pages/ProfilePartner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages />}></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/biodata' element={<BiodataPage />}></Route>
        <Route path='/main' element={<MainPage />}></Route>
        <Route path='/rekomendasiPartner' element={<RekomendasiPartner />}></Route>
        <Route path='/komunitas' element={<Komunitas />}></Route>
        <Route path='/chat' element={<Chat />} ></Route>
        <Route path='/notifications' element={<Notification />} ></Route>
        <Route path='/premium' element={<Premium />} ></Route>
        <Route path='/profile' element={<Profiles />} ></Route>
        <Route path='/updateProfile' element={<UpdateProfile />} ></Route>
        <Route path='/profilePartner' element={<ProfilePartner />}></Route>
      </Routes>
    </Router>
  )
}

export default App;