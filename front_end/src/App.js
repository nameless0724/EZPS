import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/login/loginPage';
import SignupPage from './components/signup/signupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App