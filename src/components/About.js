import React,{useEffect,useRef,useState} from 'react';
import '../styles/About.css';


function About(){
    // const [isIntersecting,setIsIntersecting]=useState(false);
    // const ref=useRef(null);
    // useEffect(()=>{
    //     const observer=new IntersectionObserver(entries=>{
    //         entries.forEach(entry=>{
    //             if(entry.isIntersecting){
    //                 setIsIntersecting(true);
    //             }
    //         })
    //     });
    //     observer.observe(ref.current);
        
    // },[])
    // useEffect(()=>{
    //     if(isIntersecting){
    //         ref.current.classList.add('load-animation')
    //     }
    //     console.log(isIntersecting)
    // },[isIntersecting])
   
    return (
        <div id='about'>
            <h1 style={{fontSize:'45px'}}>Chosen by users worldwide</h1>
            <h2 className='opacity'>Industry standard in USA, India, Canada, UAE, and 75 more countries</h2>
            <div id='about-cards'>
            <div className='about-card'>
            <h1><span className='about-gradient'>Our Story</span> 🌟</h1>
            <p className='opacity'>Our love for fitness, commitment, and innovative technology inspired us to create FitGenie</p>
            </div>
            <div className='about-card'>
            <h1><span className='about-gradient'>Our Mission</span> 🚀</h1>
            <p className='opacity'>To empower individuals to achieve their fitness goals by providing personalized workout plans</p>
            </div>
            <div className='about-card'>
            <h1><span className='about-gradient'>Our Passion</span> 💪</h1>
            <p className='opacity'>Stems from a deep desire to empower individuals to achieve their health goal</p>
            </div>
            </div>
        </div>
    )
}

export default About;