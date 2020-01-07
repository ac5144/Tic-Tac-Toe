import React, {Component} from 'react';

import GameCell from './GameCell';

import './styles/GameBoard.css';

class GameBoard extends Component {
    
    render() {
        
        return (
            <div className="game-board">
                {this.props.boardStatus.map((cell, key) => (<GameCell 
                                                                symbol={cell} 
                                                                key={key} 
                                                                cellId={key} 
                                                                onSelect={this.props.onSelect} />))}
            </div>
        )
    }
}

export default GameBoard;