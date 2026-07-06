import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const calculate = () => {
    try {
      const evaluated = Function(`return (${expression})`)();
      setResult(evaluated.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="display">
        <input
          type="text"
          value={expression}
          readOnly
        />
        <div className="result">= {result}</div>
      </div>

      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "="
                ? calculate()
                : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}

        <button
          className="clear"
          onClick={clear}
        >
          C
        </button>
      </div>
    </div>
  );
}   

export default App;