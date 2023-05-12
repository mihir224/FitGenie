import React from 'react';
import '../styles/Navbar.css';

function Navbar(){
    return (
        <div id='navbar'>
            <div >
                <ul id='nav-list'>
                    <li className='nav-list-items'><h1 id='logo'>FitGenie</h1></li>
                    <li className='nav-list-items nav-options'>Home</li>
                    <li className='nav-list-items nav-options'>About</li>
                    <li className='nav-list-items nav-options'>Pricing</li>
                    <li className='nav-list-items nav-options'>Gourmet GamePlan</li>
                    <li className='nav-list-items nav-options'>MealtimeCompass</li>
                </ul>
            </div>
            <div id='login-btns'>
                <button type='button' className='btn sign-in'>Sign In</button>
                <button type='button' className='btn sign-out'>Sign Up</button>
            </div>
        </div>
    )
}


export default Navbar;