import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [xLocation, setXLocation]
  = useState(Math.floor(Math.random() * squares.length))
  
  const [oLocation, setOLocation]= useState(Math.floor(Math.random() * squares.length))
 


  const handleGamePlay =(index)=>{
    // alert(index)
    let updatedBoard = [...squares]
    if(index === xLocation){
    // updating a single instrance of the copied array to treasure emoji
    updatedBoard[index] = "❌"
    // setting entire updated board to state
    setSquares(updatedBoard)
  } else if (index === oLocation){
    updatedBoard[index]= "🅾️"
    setSquares(updatedBoard)
  }
    }
    

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) =>{
          return <Square 
          value={value} 
          key={index}
          index={index}
          handleGamePlay={handleGamePlay}
          />
        })}


      </div>
    
    </>
  )
}

export default App