import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from './pages/Users';
import Tickets from './pages/Tickets';
import FAQ from './pages/FAQ';
import LoginForm from './pages/LoginForm';
import Settings from './pages/Settings';
import CreateTicket from './pages/CreateTicket';
import AdminProfile from './pages/AdminProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/profile" element={<AdminProfile/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/tickets/create" element={<CreateTicket/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
