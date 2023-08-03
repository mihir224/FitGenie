import React,{useEffect} from 'react';
import '../styles/Signin.css';
import {Link} from 'react-router-dom';
import {signInWithPopup} from '@firebase/auth';
import {auth,provider} from '../firebase';
import GoogleIcon from '@mui/icons-material/Google';
import {useDispatch,useSelector} from 'react-redux';
import {loginStart,loginSuccess,loginFailure,logout} from '../redux/userSlice';
import {Navigate} from 'react-router-dom';


function Signup(){
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user.currentUser);
    const handleClick=()=>{
        dispatch(loginStart());
        try{
            signInWithPopup(auth,provider).then((res)=>{
                dispatch(loginSuccess(res._tokenResponse));
            })
        }catch(err){
            dispatch(loginFailure());
        }
    }
return user?<Navigate to='/' replace={true} />:(
    <div id='container'>
        <div id='signin'>
            <h2 id='lgo'>FitGenie</h2>
            <h2 id='signin-txt' style={{fontSize:'28px',opacity:'0.9'}}>Sign Up</h2>
            <span className='opacity' style={{fontWeight:'500'}}>Have an account already? <Link to='/signin' style={{textDecoration:'none',color:'#0084ff'}}><span id='signin-txt' >Sign In</span></Link></span>
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
            <button type='submit' className='btn signin-btn' onClick={handleClick}>Sign Up With Google <GoogleIcon/></button>
            <button type='submit' className='btn signin-btn'>Sign Up</button>
            </div>
    </div>
)
}

export default Signup;