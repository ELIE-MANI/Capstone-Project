import { BrowserRouter, Route, Router, Routes } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";
import ExpensesPage from "./pages/ExpensesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return ( 
    <>
   <BrowserRouter>
    <NavBar/>
   <Routes>
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