import Navbar from "./Navbar";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate as useHistory } from "react-router-dom";
import useState from "react";

const LogoNavbar = () => {
    const history = useHistory();
    // const [toggle,setToggle] = useState(false);
    // const changeToggle = () => {
    //     setToggle(!toggle)
    // }
    return (
        <div className='logoName navBar'>
            {/* <button onClick={() => changeToggle()}><MenuIcon /></button> */}
            <img className="logoImage" src={require("../../Resources/sahasraakshaLogo.png")} alt="logo" onClick={() => { console.log("home page"); history('/'); }}></img>
            {/* <h4>SAHASRAAKSHA</h4> */}
            {/* <Navbar className={toggle ? "nav-links show-nav" : "nav-links"}/> */}
            <Navbar />
        </div>
    );
}

export default LogoNavbar;