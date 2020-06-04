import React from 'react'
import goal from './gol.jpg'
import goal1 from './goal.jpg'
import './Goal.css'


function Goal({win,stances}) {
   if(win){
    return <img id="goal" style={{top :`${stances[0]}%` , left :`${stances[1]}%`}} src={goal} alt="goal"></img>
   }else{
    return <img id="goal" style={{top :`${stances[0]}%` , left :`${stances[1]}%`}} src={goal1} alt="goal"></img>
   }
   
}

export default Goal
