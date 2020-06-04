import React from 'react'
import goal from './gol.jpg'
import './Goal.css'

function Goal({stances}) {
    return <img id="goal" style={{top :`${stances[0]}%` , left :`${stances[1]}%`}} src={goal} alt="goal"></img>
}

export default Goal
