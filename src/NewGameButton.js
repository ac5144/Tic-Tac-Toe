import React from 'react';

import './styles/NewGameButton.css';

function NewGameButton(props) {
    
    return(<button onClick={props.onNewGame}>New Game</button>)
}

export default NewGameButton;