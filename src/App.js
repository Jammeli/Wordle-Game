import "./App.css";
import { useState, useRef } from "react";
import Cell from "./Components/Cell";
const words = ["REACT", "MONGO", "HTML5", "INPUT", "USERS"];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
function App() {
  const [cells, setCells] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  console.log("Random Word: ", randomWord);
  const inputRefs = useRef([]);
  const [message,setMesssage]=useState("");
  const handelInputs = (value, index) => {
    const newInputs = [...cells];
    //console.log(newInputs);
    newInputs[index] = value;
    setCells(newInputs);
    if (value.length === 1 && index < cells.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (
      index === 4 ||
      index === 9 ||
      index === 14 ||
      index === 19 ||
      index === 24
    ) {
      let word = "";
      for (let i = index - 4; i <= index; i++) {
        //console.log(newInputs[i]);
        word = word.concat(newInputs[i]);
        console.log(word);
        if (randomWord.includes(newInputs[i])) {
          inputRefs.current[i].classList.add("correct");
        }
      }
      let allCharsInCh1 = true;
      for (let char of word) {
        if (!randomWord.includes(char)) {
          allCharsInCh1 = false;
          break;
        }
      }
      if (allCharsInCh1) {
        setMesssage("Good characters but not the right word");
      }

      if (word === randomWord) {
        for (let j = index + 1; j <= cells.length - 1; j++) {
          inputRefs.current[j].disabled = true;
          alert("Congratulation! You won!");
          window.location.reload();
          setMesssage("")
        }
      }
    }
  };
  return (
    <>
      <div className="header">
        <h1>WORDLE GAME</h1>
      </div>
      <div className="container">
        {cells.map((cell, index) => (
          <Cell
            index={index}
            key={index}
            cell={cell}
            cells={cells}
            handelInputs={handelInputs}
            inputRefs={inputRefs}
          />
        ))}
      </div>
      <div className="header">
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default App;
