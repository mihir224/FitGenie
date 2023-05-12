import React from 'react';

function WorkoutCard(props){
    return (
        <div className='workout-card'>
                <img className='workout-img' src={props.imgUrl} alt='tst'></img>
            <div id='card-body'>
                <h2>{props.name}</h2>
                <p>{props.features}</p>
                <button className='btn workout-btn'>See More</button>
            </div>
        </div>
    )
}

export default WorkoutCard;