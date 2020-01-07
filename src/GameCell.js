import React from 'react';
import './styles/GameCell.css';

const GameCell = props => {
    
    let symbol = props.symbol === null ? ' ' : props.symbol;
    let className = "game-cell";
    
    switch(props.cellId) {
        case 0:
            className += " top-left";
            break;
        case 1:
            className += " top-center";
            break;
        case 2:
            className += " top-right";
            break;
        case 3:
            className += " middle-left";
            break;
        case 4:
            className += " middle-center";
            break;
        case 5:
            className += " middle-right";
            break;
        case 6:
            className += " bottom-left";
            break;
        case 7:
            className += " bottom-center";
            break;
        case 8:
            className += " bottom-right";
            break;
        default:
            break;
    }
    
    return(
        <div className={className}>
            <div className="game-cell-inner" onClick={(e) => props.onSelect(props.cellId)}>
                <div className="content">{symbol}</div>
            </div>
        </div>
    )
}

export default GameCell;