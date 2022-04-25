import { Link } from "react-router-dom";

const Navbar = () =>{
    return (<div className="navigationBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className='navbar-link' to='/home'>
                    <span>Home</span>
                </Link>
                <Link className="navbar-link" to='/solution'>
                    <span>solution</span>
                </Link>
                <Link className='navbar-link' to='/features'>
                    <span>Features</span>
                </Link>
                <Link className="navbar-link" to='/why-us'>
                    <span>Why Us</span>
                </Link>
                <Link className="navbar-link" to='/about'>
                    <span>About Us</span>
                </Link>
                <Link className="navbar-link" to='/#team'>
                    <span>Team</span>
                </Link>
                <Link className="navbar-link" to='/contact'>
                    <span>Contact</span>
                </Link>
                <Link className="navbar-link" to='/help'>
                    <span>Help</span>
                </Link>
            </div>
        </nav>
    </div>);
}

export default Navbar;