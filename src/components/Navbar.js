import React,{useState} from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {logout} from '../redux/userSlice';
import {Navigate} from 'react-router-dom';

function Navbar(){
    const dispatch=useDispatch();
    const [open,setOpen]=useState(false);
    const user=useSelector(state=>state.user.currentUser);
    const handleLogout=()=>{
        dispatch(logout());
    }
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
            {user?
            <div id='profile'>
            <img id='profile-img' src={user.photoUrl} alt='photo' height='35' width='35' onClick={()=>{setOpen(!open)}}></img>
                <div style={{display:open?'block':'none'}} id="dropdown-content" >
                        <ul>
                        <li className="dd-list-item"><button id="logout-btn" onClick={handleLogout}>LOG OUT</button></li>
                        </ul>
                </div>
            </div>
            :<div id='login-btns'>
                <Link to='signin' replace={true}><button type='button' className='btn sign-in'>Sign In</button></Link>
                <Link to='signup' replace={true}><button type='button' className='btn sign-out'>Sign Up</button></Link>
            </div>}
        </div>
    )
}


export default Navbar;