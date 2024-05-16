import React, { useState } from "react";
import "./TicTacToe.css";
const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const checkForWinner = (squsres) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squsres[pattern[0]] === "" ||
          squsres[pattern[1]] === "" ||
          squsres[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squsres[pattern[0]] === squsres[pattern[1]] &&
          squsres[pattern[1]] === squsres[pattern[2]]
        ) {
          setWinner(squsres[pattern[0]]);
        }
      });
    }
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }
    let squsres = { ...cells };
    if (turn === "x") {
      squsres[num] = "x";
      setTurn("o");
    } else {
      squsres[num] = "o";
      setTurn("x");
    }
    checkForWinner(squsres);
    setCells(squsres);
  };
  const handlRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };
  const Ceil = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    <div className="container">
      <ul>
        <h1>تقديم </h1>
        <li>اصيد ابراهيم</li>
        <li>حيدر شيخ ابراهيم</li>
        <li>فئة 11 </li>
      </ul>

      <table>
        Turn : {turn}
        <tbody>
          <tr>
            <Ceil num={0} />
            <Ceil num={1} />
            <Ceil num={2} />
          </tr>
          <tr>
            <Ceil num={3} />
            <Ceil num={4} />
            <Ceil num={5} />
          </tr>
          <tr>
            <Ceil num={6} />
            <Ceil num={7} />
            <Ceil num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner !</p>
          <button onClick={() => handlRestart()}>play Again</button>
        </>
      )}
    </div>
  );
};
export default TicTacToe;
