import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Signin.css'
function Signin(){
    return (
        <div id='container'>
            <div id='signin'>
                <h2 id='lgo'>FitGenie</h2>
                <h2 style={{fontSize:'28px',opacity:'0.9'}}>Sign In</h2>
                <span className='opacity' style={{fontWeight:'500'}}>Don't have an account? <Link to='/signup' style={{textDecoration:'none',color:'#0084ff'}}>Sign Up</Link></span>
                <div className='input'>
                <label className='opacity' htmlFor='email'>Email</label>
                <input id='email' type='email'></input>
                </div>
                <div className='input'>
                <label className='opacity' htmlFor='password'>Password</label>
                <input id='password' type='password'></input>
                </div>
                <button type='submit' className='btn signin-btn'>Sign In</button>
                <span className='opacity' style={{fontWeight:'500'}}>Forgot password?</span>
            </div>
        </div>
   
    )
}

export default Signin;