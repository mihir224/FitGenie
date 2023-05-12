import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return(
        <div id='footer'>
        <div id='footer-list'>
            <ul>
                <span>CUSTOMER SUPPORT</span>
                <li>(01334) 236-910</li>
            </ul>
            <ul>
                <span>CONTACT US</span>
                <li>Facebook</li>
            </ul>
            <ul>
                <span>PARTNERS</span>
                <li>Cult.fit</li>
            </ul>
            <ul>
                <span>OUR NEWSLETTER</span>
                <li><input id='newsletter-input' type='email' placeholder='Email'></input> <button type='submit' className='btn subscribe-btn' >Subscribe</button></li>
            </ul>
        </div>
        <hr />
        <div id='cc' className='opacity'>
        <p className='opacity'>© Copyright FitGenie 2023</p>
        <div id='icons'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        </div>

        </div>
        </div>
    )
}

export default Footer;