import Navbar from "./Navbar";
import { useNavigate as useHistory } from "react-router-dom";

const LogoNavbar = () => {
	const history = useHistory();
    return (
        <div className='logoName'>
            <img className="logoImage" src={require("../../Resources/sahasraakshaLogo.png")} alt="logo" onClick={()=>{console.log("home page");history('/');}}></img>
            {/* <h4>SAHASRAAKSHA</h4> */}
            <Navbar />
        </div>
    );
}

export default LogoNavbar;