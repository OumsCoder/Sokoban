import React, { Component } from 'react';
import './App.css';
import Stage from './Components/Stage/Stage'
import Player from './Components/Player/Player.js'

class App extends Component {

  state ={
    // the level has the coordinate [y , x]
    level : [
      [0, 0],     [10, 90],   [90, 80],   [80, 0],
      [0, 10],    [20, 90],   [90, 70],   [70, 0],
      [0, 20],    [30, 90],   [90, 60],   [60, 0],
      [0, 30],    [40, 90],   [90, 50],   [50, 0],
      [0, 40],    [50, 90],   [90, 40],   [40, 0],
      [0, 50],    [60, 90],   [90, 30],   [30, 0],
      [0, 60],    [70, 90],   [90, 20],   [20, 0],
      [0, 70],    [80, 90],   [90, 10],   [10, 0],
      [0, 80],    [90, 90],   [90, 0],
      [0, 90],      
    ],
    // Stance Player
    stancePlayer : [10, 10]
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
      </div>
    )
  }
}

export default App;
