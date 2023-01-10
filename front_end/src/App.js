import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllowancePage from './components/allowance/allowancePage';
import AttendanceCheckingPage from './components/attendanceCheck/attendanceCheckPage';
import DeductionPage from './components/deduction/deductionPage';
import EmployeeProfilePage from './components/employeeProfile/employeeProfPage';
import EmployeeSalaryPage from './components/employeeSalary/employeeSalaryPage';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/login/loginPage';
import PayrollPeriodPage from './components/payrollPeriod/payrollPeriodPage';
import PayslipPage from './components/payslip/payslipPage';
import SidenavNew from './components/sidenav/sidenavnew';
import SignupPage from './components/signup/signupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/employee" element={<EmployeeProfilePage />} />
        <Route path="/employeesalary" element={<EmployeeSalaryPage />} />
        <Route path="/attendance" element={<AttendanceCheckingPage />} />
        <Route path="/payrollperiod" element={<PayrollPeriodPage />} />
        <Route path="/payslip" element={<PayslipPage />} />
        <Route path="/deduction" element={<DeductionPage />} />
        <Route path="/allowance" element={<AllowancePage />} />
        <Route path="/new" element={<SidenavNew />} />
      </Routes>
    </BrowserRouter> 
  ) 
}

export default App