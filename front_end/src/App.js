import TopBar from './components/topbar/topBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/loginPage';
import ProfilePage from './components/profile/profilePage';
import PayslipPage from './components/payslip/payslipPage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/payslip" element={<PayslipPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;