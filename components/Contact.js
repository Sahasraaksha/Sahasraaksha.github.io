import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
// import Icon from '@mui/material/Icon';

const Contact = () => {
    return (
        <div class="inner">
            <br />
            <hr></hr>
            <ul className='muiIconHolder'>
                <li><a href="tel:+919080877386" className='muiIcons'><PhoneAndroidRoundedIcon /></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=919080877386&text=Hey%20!!%20I%20would%20like%20to%20know%20more%20about%20sahasraaksha" className='muiIcons'><WhatsappRoundedIcon /></a></li>
                <li><a href="tel:+918300843618" className='muiIcons'><PhoneIphoneRoundedIcon /></a></li>
                <li><a href="mailto:sahasraaksha1000@gmail.com" className='muiIcons'><EmailOutlinedIcon /></a></li>
                <li><a href="https://www.google.co.in" className='muiIcons'><FacebookRoundedIcon /></a></li>
                <li><a href="https://www.google.co.in" className='muiIcons'><SubscriptionsRoundedIcon /></a></li>
                <li><a href="https://www.google.co.in" className='muiIcons'><TwitterIcon /></a></li>
                
            </ul>
            <p>&copy;<a href="https://sahasraaksha.github.io">sahasraaksha</a></p>
        </div>
    );

    // return (
    //     <div className="footerStyle">
    //         <h1>Contact</h1>
    //         <PhoneAndroidIcon />
    //         <ul>
    //             <li><a href="mailto:sahasraaksha1000@gmail.com">Sahasraaksha1000@gmail.com</a></li>
    //             {/* <li><Icon data-testid="PhoneAndroidIcon"><a href="mailto:sahasraaksha1000@gmail.com">Sahasraaksha1000@gmail.com</a></Icon></li> */}
    //             <li><a href="tel:+918300843618"><PhoneAndroidIcon fontSize='medium' /> 8300843618</a></li>
    //             <li>Contact Number: <a href="tel:+919080877386">+91 90808 77386</a></li>
    //             <li>Youtube: <a>Sahasraaksha</a></li>
    //             <li>Twitter: <a>Sahasraaksha</a></li>
    //         </ul>
    //     </div>
    // );
}

export default Contact;