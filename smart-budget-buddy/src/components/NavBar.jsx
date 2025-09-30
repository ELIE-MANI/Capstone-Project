import { Link } from "react-router";

function NavBar() {
  return ( 
  <>
  <nav className="text-white p-4 ">
    <ul className="flex justify-around">
  <li><Link to='/' className=" transition delay-300 border-b-2 border-transparent hover:border-white">Dashboard</Link></li>
  <li><Link to='/profile' className="transition delay-300 border-b-2 border-transparent hover:border-white">Profile</Link></li>
  <li><Link to='/expenses' className="transition delay-300 border-b-2 border-transparent hover:border-white">Expenses</Link></li>
  <li><Link to='/settings' className="transition delay-300 border-b-2 border-transparent hover:border-white">Settings</Link></li>
  </ul>

  </nav>
  </>

    
   );
}

export default NavBar;