import React, { useState } from 'react'
import Buttons from './Buttons'
import './App.scss'

const buttons = [
  ['C', 'btn btn_clear'],
  ['()', 'btn btn_basic-ops'],
  ['%', 'btn btn_basic-ops'],
  ['/', 'btn btn_basic-ops'],
  ['7', 'btn btn_num'],
  ['8', 'btn btn_num'],
  ['9', 'btn btn_num'],
  ['*', 'btn btn_basic-ops'],
  ['4', 'btn btn_num'],
  ['5', 'btn btn_num'],
  ['6', 'btn btn_num'],
  ['-', 'btn btn_basic-ops'],
  ['1', 'btn btn_num'],
  ['2', 'btn btn_num'],
  ['3', 'btn btn_num'],
  ['+', 'btn btn_basic-ops'],
  ['+/-', 'btn btn_num'],
  ['0', 'btn btn_num'],
  ['.', 'btn btn_num'],
  ['=', 'btn btn_answer']
]

function App() {
  const [formula, setFormula] = useState("")  
  const [output, setOutput] = useState("")
  function handleClick(e) {
    // const last = formula[-1];

    

    switch (e.target.value) {
      case "C": setFormula("");
      break;
      case "0": if (formula === "0") {break};
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8": if (formula === "0" || formula[-1] === "0") {break};
      case "9": setFormula(formula + e.target.value);
      break;
      case "+": 
      case "-":
      case "/":
      case "*":
      case "%": 
      case ".": 
      if (true) {
        setFormula(formula + e.target.value);
      }
      break;
      case "=": setOutput(eval(formula))
      break;
      
      // case "+":
      // case "+":

      



    }    
    
  }
  return (
    <div className="App">
      <div className="formula">
        <span className="input-display">{formula}</span>
        <span className="output-display">{output}</span>

      </div>
      <div className="delete">
        <img 
          src="../assets/delete-key.png" 
          className="delete-key"
        />
      </div>
      <div className="buttons">
      {buttons.map((item) => {
        return (
          <Buttons 
            value={item[0]} 
            className={item[1]}
            onClick={handleClick}  
            />
        )
      })}
      </div>      
    </div>
  )
}

export default App
