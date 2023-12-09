
import { Route, Routes } from 'react-router-dom';
import './App.css'
// import { Button } from "@material-tailwind/react";
// import { MyAccordion } from './pages/MyAccordion';
// import { MyNavbar } from './components/MyNavbar';
import AppointmentPage from './pages/appointment/AppointmentPage';
import PrivateLayout from './pages/layout/PrivateLayout';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/auth/UserPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import PublicLayout from './pages/layout/PublicLayout';
import AppointmentList from './pages/appointment/AppoitmentList';
import PatientAppointment from './pages/appointment/PatientAppointment';
import TodoPage from './pages/todo/TodoPage';
import DoctorList from './pages/doctor/DoctorList';


// https://reactrouter.com/en/main/components/outlet
function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          {/* <Route path="appointment" element={<AppointmentPage />} /> */}
          <Route path="appointmentList" element={<AppointmentList />} />
          <Route path="user/:id" element={<UserPage />} />          
        </Route>
        
        <Route path='/' element={<PublicLayout />}>
          <Route path="appointment/:tel" element={<AppointmentPage />} />
          <Route path="patient/appointment/:tel" element={<PatientAppointment />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="todo" element={<TodoPage />} />          
        </Route>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />

      </Routes>



    </>
  )
}

export default App
