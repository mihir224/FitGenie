import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <div id='navbar'>
            <div >
                <ul id='nav-list'>
                    <Link to='/' replace={true}><li className='nav-list-items'><h1 id='logo'>FitGenie</h1></li></Link>
                    <li className='nav-list-items nav-options'>Home</li>
                    <li className='nav-list-items nav-options'>About</li>
                    <li className='nav-list-items nav-options'>Pricing</li>
                    <Link to='/workout' replace={true} style={{color:'inherit'}}><li className='nav-list-items nav-options'>Workout Plans</li></Link>
                    <li className='nav-list-items nav-options'>Gourmet GamePlan</li>
                    <li className='nav-list-items nav-options'>MealtimeCompass</li>
                </ul>
            </div>
            <div id='login-btns'>
                <Link to='signin' replace={true}><button type='button' className='btn sign-in'>Sign In</button></Link>
                <Link to='signup' replace={true}><button type='button' className='btn sign-out'>Sign Up</button></Link>
            </div>
        </div>
    )
}


export default Navbar;