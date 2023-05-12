import React from 'react';
import '../styles/Home.css';
import genie from '../images/genie.png';

function Home(){
    return (
        <div id='home'>
        <div>
        <img id='genie' src={genie} alt='aladdin' width='550' height='350'></img>
        </div>

        <div id='home-text'>
        <h1 style={{fontSize:'50px'}}>Fitness <span className='home-gradient'>personalized</span> by <span className='home-gradient'>AI</span>.</h1>
        
        <h3 className='home-info'>Welcome to the future of fitness. Our AI-powered workout plan generator 
        is revolutionizing the way people exercise by creating personalized workout 
        plans that are tailored to your body type, fitness level, and <span className='home-gradient'>goals.</span></h3>
        
        <h3 className='home-info'>New Releases ✨ </h3>
        <h3 className='home-info'><span style={{color:'#0776df'}}>Gourmet GamePlan</span>  🥙 <br/>
        Unlock the full potential of your fitness journey with a fusion of tailored workouts and AI-generated meal plans <br/></h3>

        <h3 className='home-info'><span style={{color:'#03d473'}}>MealtimeCompass</span> ✍️ <br/>
        Track your meals with ease and gain valuable insights into your nutrition with our instant, in-depth analysis of calories, macros, and micros<br/>
         </h3>
        
        <p style={{fontWeight:'500'}}>Our AI-powered system has created over a million unique workout routines and counting, tailored to the specific needs and goals of our users.</p>
        <p style={{fontWeight:'500'}} className='opacity'> Sign up for free, no payment details necessary!</p>
        <button className='btn explore-btn'>Explore More</button>
        </div>
        
        </div>
    )
}

export default Home;