import { BrowserRouter, Route, Router, Routes, Navigate } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";
import ExpensesPage from "./pages/ExpensesPage";
import SettingsPage from "./pages/SettingsPage";
import useAuthStore from "./store/AuthStore";
import LoginPage from "./pages/LoginPage";

function App() {

  function ProtectedRoute({ children }) {
    const {user} =useAuthStore();
    return user ? children: <Navigate to="/login" />
  }
  return ( 
    <>
   <BrowserRouter>
    <NavBar/>
   <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/" element={
      <ProtectedRoute>
        <DashboardPage/>
      </ProtectedRoute>
    }/>
    <Route path="/profile" element={
      <ProtectedRoute>
        <ProfilePage/>
      </ProtectedRoute>
    }/>
    
    <Route path="/" element={<DashboardPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/expenses" element={<ExpensesPage/>}/>
    <Route path="/settings" element={<SettingsPage/>}/>
   </Routes>
 
   </BrowserRouter>
    </>
   );
}

export default App;