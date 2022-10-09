import TopBar from './components/topbar/topBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/loginPage';
import SignUpPage from './components/signUp/signUpPage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;