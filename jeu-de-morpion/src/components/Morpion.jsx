import React, { useEffect, useState } from "react";
import "./Morpion.css";

function Morpion () {
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [winner, setWinner] = useState();

    //function click cell
    const handleCellClick = (index) => {
        if(winner){
            return null;
        }

        if(board[index] !== "") 
        return null;

        setBoard(board.map((item, itemElement) => itemElement === index ?
        currentPlayer : item));
        setCurrentPlayer(currentPlayer === "X"  ? "O": "X")
    };

    const checkWinner = () => {
        const possibleWaysToWin = [
          [board[0], board[1], board[2]],
          [board[3], board[4], board[5]],
          [board[6], board[7], board[8]],
      
          [board[0], board[3], board[6]],
          [board[1], board[4], board[7]],
          [board[2], board[5], board[8]],
      
          [board[0], board[4], board[8]],
          [board[2], board[4], board[6]],
      
        ];

        possibleWaysToWin.forEach(cells => {
            if(cells.every(cell => cell === "O")) setWinner("O");
            if(cells.every(cell => cell === "X")) setWinner("X")
        });

        checkTed();
    };

    const checkTed = () => {
        if(board.every(item => item !== "")) {
            setWinner("D");
        }
    };

    useEffect(checkWinner, [board]);

    const resetGame = () => {
        setCurrentPlayer("O");
        setBoard(emptyBoard);
        setWinner(null);
      }

    return(
        <main>
            <h1 className="title">Jeu de Morpion</h1>
           <div className={`board ${winner ? "game-over" : "game ober"}`}>

                {board.map((item, index) => (
            <div key={index} className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
            >{item}</div>
               
               ))}
                
              
            </div>
 {winner &&
     <footer>
       {winner === "D" ?
       <h2 className='winner-message'>
         <span className={winner}>Tied!</span>
       </h2>
       :
       <h2 className='winner-message'>
         <span className={winner}>{winner}</span> won!
       </h2>}
       <button onClick={resetGame}>Restart game</button>
     </footer>
}
        </main>
    )
}
export default Morpion;