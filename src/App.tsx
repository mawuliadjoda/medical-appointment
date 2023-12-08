
import { Route, Routes } from 'react-router-dom';
import './App.css'
// import { Button } from "@material-tailwind/react";
// import { MyAccordion } from './pages/MyAccordion';
// import { MyNavbar } from './components/MyNavbar';
import AppointmentPage from './pages/AppointmentPage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import AppointmentList from './pages/AppoitmentList';
import UserPage from './pages/UserPage';

// https://reactrouter.com/en/main/components/outlet
function App() {

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="appointment" element={<AppointmentPage />}/>
            <Route path="appointmentList" element={<AppointmentList/>}/>
            <Route path="user/:id" element={<UserPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      


    </>
  )
}

export default App
