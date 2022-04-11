import React from "react";
import "./Morpion.css";

function Morpion () {

    return(
        <main>
            <h1 className="title">Jeu de Morpion</h1>
            <div className="board">
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
            </div>

        </main>
    )
}
export default Morpion;