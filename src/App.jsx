import React, { useState } from 'react'
import Buttons from './Buttons'
import './App.scss'

const buttons = [
  ['C', 'btn btn_clear'],
  ['()', 'btn btn_parentheses'],
  ['%', 'btn btn_remainder'],
  ['/', 'btn btn_divide'],
  ['7', 'btn btn_seven'],
  ['8', 'btn btn_eight'],
  ['9', 'btn btn_nine'],
  ['X', 'btn btn_multiply'],
  ['4', 'btn btn_four'],
  ['5', 'btn btn_five'],
  ['6', 'btn btn_six'],
  ['-', 'btn btn_subtract'],
  ['1', 'btn btn_one'],
  ['2', 'btn btn_two'],
  ['3', 'btn btn_three'],
  ['+', 'btn btn_add'],
  ['0', 'btn btn_zero'],
  ['.', 'btn btn_dot'],
  ['=', 'btn btn_answer']
]

function App() {
  const [count, setCount] = useState(0)  
  return (
    <div className="App">
      <div className="formula">
        <span>formula</span>
        <span>asnwer</span>

      </div>
      <div className="delete">
        delete
      </div>
      <div className="buttons">
      {buttons.map((item) => {
        return (
          <Buttons value={item[0]} className={item[1]} />
        )
      })}
      </div>      
    </div>
  )
}

export default App
