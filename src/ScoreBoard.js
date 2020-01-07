import React from 'react';

import './styles/ScoreBoard.css';

function ScoreBoard(props) {
    
    return (
        <div className="scoreBoard">
            <div className="playerLabel playerX">PLAYER X</div>
            <div className="playerScore playerX">{props.playerXScore}</div>
            <div className="result">{props.gameOver ? `PLAYER ${props.currentTurn} wins!` : `PLAYER ${props.currentTurn}'s Turn`}</div>
            <div className="playerScore playerO">{props.playerOScore}</div>
            <div className="playerLabel playerO">PLAYER O</div>
        </div>
    )
}

export default ScoreBoard;