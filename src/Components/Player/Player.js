import React from 'react'
import Gamer from './player.png'
import './Player.css'

function Player({stance}) {
    return <img id="player" style={{top :`${stance[0]}%` , left :`${stance[1]}%`}} src={Gamer} alt="player"></img>
}

export default Player
