import React from 'react'
import { useState } from  'react';
function Calculator() {
    const [cal ,setCal] = useState("");
    const [result,setResult] = useState("");

      const Opers=['/','*','+','-','.'];
 
      const UpdateCals= value => {
        if (
             Opers.includes(value) && cal === " " |
             Opers.includes(value) && Opers.includes(cal.slice(-1)
             )
        ){
          return;
        }
        setCal(cal + value)
        if (!Opers.includes(value)) {
            setResult(eval(cal + value).toString());
        }
      }
    

    const createDigits= () => {
        const digits =[];
        for (let i = 0; i < 10; i++) {
           digits.push(
            <button 
             onClick={() => UpdateCals(i.toString())}
             key={i}>{i}
          </button>
           )
        }
        return digits
    }

    const calculates= () => {
        setCal(eval(cal).toString())
    }

    const Deletes = () => {
        if (cal === ''){
            return;
        }
       const value= cal.slice(0,-1) 
       setCal(value)
    }
  return (
    <div className='cal'>
      <div className="calculator">
          <div className="display">
           {result ? <span>({result})</span> : " "}&nbsp;
           {cal || '0'}
          </div>
          <div className="operators">
            <button onClick={() => UpdateCals('/')}>/</button>
            <button onClick={() => UpdateCals('*')}>*</button>
            <button onClick={() => UpdateCals('+')}>+</button>
            <button onClick={() => UpdateCals('-')}>-</button>

            <button onClick={Deletes}>Del</button>
          </div>
            <div className="digits">
                {createDigits()}
                <button onClick={() => UpdateCals('0')}>0</button>
                <button onClick={() => UpdateCals('.')}>.</button>
                <button onClick={calculates}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator
