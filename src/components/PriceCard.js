import React from 'react';
import '../styles/Pricing.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function PriceCard(props){
    return(
        <div className='pricing-card'>
            <p className='price' style={{fontWeight:'bold'}}><span style={{fontSize:'55px'}}>${props.price}</span><span className='opacity'>/month</span></p>
            <h3 className='opacity' style={{margin: '0'}}>{props.name} Plan</h3>
            <ul id='benefits-list'>
                {props.benefits.map((benefit)=>{
                    return(
                    <li className='price-list-item'><CheckCircleOutlineIcon className='check' /> {benefit}</li>
                )
                })}
            </ul>
            <button className='btn price-btn'>Buy</button>
        </div>
    )
}

export default PriceCard;