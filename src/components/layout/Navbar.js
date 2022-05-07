// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="navigationBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link activeClass="active" className='navbar-link' to='home' smooth='true'>
                        <span>Home</span>
                    </Link>
                    <Link className="navbar-link" to='solution' smooth='true'>
                        <span>solution</span>
                    </Link>
                    <Link className='navbar-link' to='features' smooth='true'>
                        <span>Features</span>
                    </Link>
                    <Link className="navbar-link" to='whyus' smooth='true'>
                        <span>Why Us</span>
                    </Link>
                    <Link className="navbar-link" to='about' smooth='true'>
                        <span>About Us</span>
                    </Link>
                    <Link className="navbar-link" to='team' smooth='true'>
                        <span>Team</span>
                    </Link>
                    <Link className="navbar-link" to='contact' smooth='true'>
                        <span>Contact</span>
                    </Link>
                    <Link className="navbar-link" to='help' smooth='true'>
                        <span>Help</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

// const Navbar = () => {
//     return (
//         <div className="navigationBar">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container">
//                     <Link className='navbar-link' to={{pathname:'/', hash:'#home'}}>
//                         <span>Home</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#solution'}}>
//                         <span>solution</span>
//                     </Link>
//                     <Link className='navbar-link' to={{pathname:'/', hash:'#features'}}>
//                         <span>Features</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#whyus'}}>
//                         <span>Why Us</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#about'}}>
//                         <span>About Us</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#team'}}>
//                         <span>Team</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#contact'}}>
//                         <span>Contact</span>
//                     </Link>
//                     <Link className="navbar-link" to={{pathname:'/', hash:'#help'}}>
//                         <span>Help</span>
//                     </Link>
//                 </div>
//             </nav>
//         </div>
//     );
// }
export default Navbar;