import React, { Component } from 'react';

const Player = ({name, name_input, button_status, handleClick, player_games, button_disabled}) =>
 {
        return(
            <div className="player">
                <h2>Player {name}</h2>
                <p>Name: {name_input}</p>
                <p>Played number of times: {player_games}</p>
                <button className='playButton' onClick={() => handleClick(name)}
                    disabled={button_disabled}>
                    {button_status}</button>
            </div>
        );
}

export default Player

//class Player extends Component