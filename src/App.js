import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(""))

  const [player, setPlayer]
  = useState("❌")
  


  const handleGamePlay =(index)=>{
    // alert(index)
    let updatedBoard = [...squares]
    if(player === "❌"){
    // updating a single instrance of the copied array to treasure emoji
    updatedBoard[index] = "❌"
    // setting entire updated board to state
    setSquares(updatedBoard)
    setPlayer("⭕️")
  } else if (player === "⭕️") {
    updatedBoard[index]= "⭕️"
    setSquares(updatedBoard)
    setPlayer("❌")
  } else {
   return  "error"
  }
    }
//const that makes the x = index[0] and o = index[1]
//when clicking one thing

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