import React from 'react'
import './Stage.css'
import Bloc from './bloc.png'

function Stage({area}) {

    return area.map( (bloc , index)=>{
        return  <img key={index} style={{top : `${bloc[0]}%`, left: `${bloc[1]}%` }} id="bloc-size" src={Bloc} alt="bloc" />
    })
}

export default Stage
