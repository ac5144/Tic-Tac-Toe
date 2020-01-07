import React, {Component} from 'react';

import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import NewGameButton from './NewGameButton';

import './styles/Game.css';

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            currentTurn: 'X',
            boardStatus: [  null, null, null, 
                            null, null, null, 
                            null, null, null],
            gameOver: false,
            playerXScore: 0,
            playerOScore: 0
        }
        
        this.onSelect = this.onSelect.bind(this);
        this.onNewGame = this.onNewGame.bind(this);
    }
    
    onSelect(index) {
        
        if (this.state.gameOver) {
            return;
        }
        
        let newBoardStatus = this.state.boardStatus;
        let currentTurn = this.state.currentTurn;
        
        if (newBoardStatus[index] !== null) {
            return;
        }
        
        newBoardStatus[index] = currentTurn;
        this.setState({boardStatus: newBoardStatus}, () => {
            
            this.checkWin(index);
        });
    }
    
    checkHorizontalWin(index) {
        
        for (let i = Math.floor(index / 3) * 3; i <= (Math.floor(index / 3) * 3) + 2; i++) {

            if (this.state.boardStatus[i] !== this.state.currentTurn) {
                return false;
            }
        }
        return true;
    }
    
    checkVerticalWin(index) {
        
        for (let i = index % 3; i <= (index % 3) + 6; i += 3) {
            
            if (this.state.boardStatus[i] !== this.state.currentTurn) {
                return false;
            }
        }
        return true;
    }
    
    checkDiagonalWin(index) {
        
        if (index % 2 !== 0) {
            return false;
        }
        
        let hasWon = true;
        
        if (index % 4 === 0) {
            
            for (let i = 0; i <= 8; i += 4) {
            
                if (this.state.boardStatus[i] !== this.state.currentTurn) {
                    hasWon = false;
                    break;
                }
            }
            
            if (hasWon)
                return hasWon;
        } 
        
        if (index === 4 || (index > 0 && index < 8)) {
            
            for (let i = 2; i <= 6; i += 2) {
            
                if (this.state.boardStatus[i] !== this.state.currentTurn) {
                    hasWon = false;
                    break;
                }
                hasWon = true;
            }
        }
        
        return hasWon;
    }
    
    checkWin(index) {
        
        if (this.checkHorizontalWin(index) || this.checkVerticalWin(index) || this.checkDiagonalWin(index)) {
            
            let playerXScore = this.state.playerXScore + (this.state.currentTurn === 'X' ? 1 : 0);
            let playerOScore = this.state.playerOScore + (this.state.currentTurn === 'O' ? 1 : 0);
            
            this.setState({ gameOver: true, 
                            playerXScore: playerXScore, 
                            playerOScore: playerOScore});
        } else {
            
            this.setState(state => ({currentTurn: state.currentTurn === 'O' ? 'X' : 'O'}))
        }
    }
    
    onNewGame() {
        
        const newState = {
            currentTurn: 'X',
            boardStatus: [  null, null, null, 
                            null, null, null, 
                            null, null, null],
            gameOver: false
        }
        
        this.setState(newState);
    }
    
    render() {
        return (
            <div className="game">
                <ScoreBoard 
                    gameOver={this.state.gameOver} 
                    currentTurn={this.state.currentTurn} 
                    playerXScore={this.state.playerXScore} 
                    playerOScore={this.state.playerOScore} />
                <GameBoard 
                    boardStatus={this.state.boardStatus} 
                    currentTurn={this.state.currentTurn} 
                    onSelect={this.onSelect} />
                <NewGameButton 
                    onNewGame={this.onNewGame} />
            </div>
        )
    }
}

export default Game;