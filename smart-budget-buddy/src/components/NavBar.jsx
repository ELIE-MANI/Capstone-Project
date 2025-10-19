import { Link } from "react-router";

function NavBar() {
  return ( 
  <>
  <nav className="flex items-center justify-between py-4 px-6 bg-secondary shadow-sm ">
    <Link to="/" className="text-xl font-bold text-gray-900 ">
      Smart <span className="text-emerald-500">Budget Buddy</span>
    </Link>
    <ul className="flex items-center space-x-6 font-semibold">
  <li><Link to='/' className=" transition delay-300 border-b-2 border-transparent hover:border-white">Dashboard</Link></li>
  <li><Link to='/profile' className="transition delay-300 border-b-2 border-transparent hover:border-white">Profile</Link></li>
  <li><Link to='/expenses' className="transition delay-300 border-b-2 border-transparent hover:border-white">Expenses</Link></li>
  <li><Link to='/settings' className="transition delay-300 border-b-2 border-transparent hover:border-white">Settings</Link></li>
  </ul>
  <button className="bg-primary text-white px-4 py-2 rounded-lg">
     Sign in →
  </button>
  </nav>
  </>

    
   );
}

export default NavBar;