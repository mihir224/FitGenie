import React from 'react';
import '../styles/Pricing.css';
import PriceCard from './PriceCard';
import {plans} from '../plans'

function Pricing(){
    return(
        <section id='pricing'>
        <div>
            <h2 style={{fontWeight:'500'} }className='opacity'>Pricing</h2>
            <h1 style={{fontSize:'36px'}}>Achieve Your Fitness Goals Here</h1>
            <h2 style={{fontWeight:'500'} } className='opacity'>Elevate Your Fitness Journey</h2>
        </div>
        <div id='pricing-cards'>
            {
                plans.map((plan)=>{
                    return (
                    <PriceCard key={plan.id} name={plan.name} price={plan.price} benefits={plan.benefits}/>
                    )
                })
            }
        </div>
        </section>
    )
}

export default Pricing
