import React, { Component } from 'react';
import './App.css';
import Stage from './Components/Stage/Stage'
import Player from './Components/Player/Player.js'
import Goal from './Components/Goal/Goal'

class App extends Component {

  state ={
    // the level has the coordinate [y , x]
    level : [
      [40, 30],
      [0, 20],     [10, 80],   [90, 80],   [80, 0], 
      [10, 10],    [20, 80],   [90, 70],   [70, 0],
      [10, 20],    [30, 80],   [90, 60],   [60, 0],
      [0, 30],     [40, 80],    [90, 50],    [50, 0],
      [0, 40],     [50, 80],    [90, 40],    [40, 0],
      [0, 50],     [60, 80],    [90, 30],    [30, 0],
      [0, 60],     [70, 90],   [90, 20],    [20, 0],
      [0, 70],     [80, 90],   [90, 10],    [10, 0],
      [0, 80],     [90, 90],   [90, 0],     [50, 20],
      [60, 90],     [30, 10],   [30, 20],    [40, 20],
    ],
    // Stance Player
    stancePlayer : [40, 10],
    // Stance Goal
    stanceGoal : [60, 40]
  }
  
  // fx when user press up 
  pressUp = ()=>{
    this.setState({   
        stancePlayer : [this.state.stancePlayer[0]-10 , this.state.stancePlayer[1]]
    })

    for (let i=0; i<this.state.level.length; i++) {
      if(this.state.stancePlayer[0]===this.state.level[i][0] && this.state.stancePlayer[1]===this.state.level[i][1]){
        this.setState({   
          stancePlayer : [this.state.stancePlayer[0]+10 , this.state.stancePlayer[1]]
      })
      }
    }

    if(this.state.stancePlayer[0]===this.state.stanceGoal[0] && this.state.stancePlayer[1]-10===this.state.stanceGoal[1]){
      this.setState({
        stanceGoal : [this.state.stanceGoal[0]-10, this.state.stanceGoal[1]]
      })
    }
  }

  // fx when user press rigth
  pressRigth = ()=>{
    this.setState({   
      stancePlayer : [this.state.stancePlayer[0] , this.state.stancePlayer[1]+10]
    })

    for (let i=0; i<this.state.level.length; i++) {
      if(this.state.stancePlayer[0]===this.state.level[i][0] && this.state.stancePlayer[1]===this.state.level[i][1]){
        this.setState({   
          stancePlayer : [this.state.stancePlayer[0] , this.state.stancePlayer[1]-10]
        })
      }
    }

    if(this.state.stancePlayer[0]===this.state.stanceGoal[0] && this.state.stancePlayer[1]-10===this.state.stanceGoal[1]){
      this.setState({
        stanceGoal : [this.state.stanceGoal[0], this.state.stanceGoal[1]+10]
      })
    }
  }

  // fx when user press down
  pressDown = ()=>{
    this.setState({   
      stancePlayer : [this.state.stancePlayer[0]+10 , this.state.stancePlayer[1]]
    })

    for (let i=0; i<this.state.level.length; i++) {
      if(this.state.stancePlayer[0]===this.state.level[i][0] && this.state.stancePlayer[1]===this.state.level[i][1]){
        this.setState({   
          stancePlayer : [this.state.stancePlayer[0]-10 , this.state.stancePlayer[1]]
        })
      }
    }

    if(this.state.stancePlayer[0]===this.state.stanceGoal[0] && this.state.stancePlayer[1]-10===this.state.stanceGoal[1]){
      this.setState({
        stanceGoal : [this.state.stanceGoal[0]+10, this.state.stanceGoal[1]]
      })
    }
  }

  // fx when user press left
  pressLeft = ()=>{
    this.setState({   
      stancePlayer : [this.state.stancePlayer[0] , this.state.stancePlayer[1]-10]
    })

    for (let i=0; i<this.state.level.length; i++) {
      if(this.state.stancePlayer[0]===this.state.level[i][0] && this.state.stancePlayer[1]===this.state.level[i][1]){
        this.setState({   
          stancePlayer : [this.state.stancePlayer[0] , this.state.stancePlayer[1]+10]
        })
      }
    }

    if(this.state.stancePlayer[0]===this.state.stanceGoal[0] && this.state.stancePlayer[1]-10===this.state.stanceGoal[1]){
      this.setState({
        stanceGoal : [this.state.stanceGoal[0], this.state.stanceGoal[1]-10]
      })
    }
  }

  render(){
    
    document.body.onkeydown = (e)=>{
      if(e.keyCode===38){
        this.pressUp()
      }
      if(e.keyCode===39){
        this.pressRigth()
      }
      if(e.keyCode===40){
        this.pressDown()
      }
      if(e.keyCode===37){
        this.pressLeft()
      }
    }
    return (
      <div className="game-area">
        <Player stance={this.state.stancePlayer} />
        <Stage area={this.state.level}/>
        <Goal stances={this.state.stanceGoal}/>  
      </div>
    )
  }
}

export default App;
