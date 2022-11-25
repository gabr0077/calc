import { useState } from "react";
import { evaluate } from "mathjs";


function App() {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("");
  const ops = ['/', '*', '-', '+', '.'];

  const updateCalc = value => {

    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1))
      )) {
      setResult(result + value)
    }



    setCalc(calc + value);

  }

  const createdigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())()} key={i}>{i}</button>
      )

    }
    return digits;

  }
  return (
    <div className="Ap">
      <div className="calculator">
        <div className="display">
          {/* {result ? <span>(0)</span> : ''} */}
          {/* {calc || "0"} */}
          <p> {calc}</p>


        </div>
        <div className="operators">

          <button onClick={() => updateCalc('/')}>/
          </button>
          <button onClick={() => updateCalc('*')}>*
          </button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={() => setCalc("")}>C</button>
          <div className="digits">
            {createdigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => setCalc(evaluate(calc))}>=</button>



          </div>



        </div>
      </div>
    </div>
  )
}


export default App;
