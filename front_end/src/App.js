import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/login/loginPage';
import PayrollPage from './components/payroll/payrollPage';
import PayrollDisplay from './components/payroll/payrollTable';
import SignupPage from './components/signup/signupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/payrolllist" element={<PayrollDisplay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  ) 
}

export default App