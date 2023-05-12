import React from 'react';
import '../styles/Workout.css';
import WorkoutCard from './WorkoutCard';
import {workoutPlans} from '../workoutPlans';

function Workout(){
    return (
        <div>
        <h1 style={{textAlign:'center',paddingTop:'40px',fontSize:'40px'}} className='home-gradient'>Workout Plans</h1>
        <div id='workout-cards'>
            {workoutPlans.map(workoutPlan=>{
                return(
                    <WorkoutCard key={workoutPlan.id} imgUrl={workoutPlan.imgUrl} name={workoutPlan.name} features={workoutPlan.features} />
                )
            })}
        </div>
        </div>
    )
}

export default Workout;