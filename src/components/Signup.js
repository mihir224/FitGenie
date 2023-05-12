import React from 'react';
import '../styles/Signin.css';
import {Link} from 'react-router-dom';


function Signup(){
return (
    <div id='container'>
        <div id='signin'>
            <h2 id='lgo'>FitGenie</h2>
            <h2 style={{fontSize:'28px',opacity:'0.9'}}>Sign Up</h2>
            <span className='opacity' style={{fontWeight:'500'}}>Have an account already? <Link to='/signin' style={{textDecoration:'none',color:'#0084ff'}}>Sign In</Link></span>
            <div className='input'>
            <label className='opacity' htmlFor='f-name'>First Name</label>
            <input id='f-name' type='text'></input>
            </div>
            <div className='input'>
            <label className='opacity' htmlFor='l-name'>Last Name</label>
            <input id='l-name' type='text'></input>
            </div>
            <div className='input'>
            <label className='opacity' htmlFor='email'>Email</label>
            <input id='email' type='email'></input>
            </div>
            <div className='input'>
            <label className='opacity' htmlFor='password'>Password</label>
            <input id='password' type='password'></input>
            </div>
            <div className='input'>
            <label className='opacity' htmlFor='cnf-password'>Confirm Password</label>
            <input id='cnf-password' type='password'></input>
            </div>
            <button type='submit' className='btn signin-btn'>Sign Up</button>
            </div>
    </div>
)
}

export default Signup;