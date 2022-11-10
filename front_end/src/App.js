import TopBar from './components/topbar/topBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/loginPage';
import SignupPage from './components/signup/signupPage';
import PayslipPage from './components/payslip/payslipPage';
import ProfilePage from './components/profile/profilePage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payslip" element={<PayslipPage />} />
        <Route path="/newprofile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App