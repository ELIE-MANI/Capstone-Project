import { Link } from "react-router";

function NavBar() {
  return ( 
  <>
  <nav>
    <ul>
  <li><Link to='/'>Dashboard</Link></li>
  <li><Link to='/profile'>Profile</Link></li>
  <li><Link to='/expenses'>Expenses</Link></li>
  <li><Link to='/settings'>Settings</Link></li>
  </ul>

  </nav>
  </>

    
   );
}

export default NavB


ar;