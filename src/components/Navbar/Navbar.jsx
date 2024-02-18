import './Navbar.css'

const Navbar = () =>
{
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img className="postman-logo" src="postman-logo-bgr.png"></img>
        </div>
        <ul className='nav-menu'>
            <li>Explore</li>
            <li>About</li>
            <li>Support</li>
            <li className='nav-subscribe'>Subscribe</li>
            <li className='nav-subscribe'>Log In</li>
            
            
        </ul>
    </div>
  );
}

export default Navbar