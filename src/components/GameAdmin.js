import React, { Component, useState } from 'react';
import Player from './Player';

const GameAdmin = () => {
    const [name_one,setNameOne]=useState('<name from the input field>');
    const [name_two,setNameTwo]=useState('<name from the input field>');
    const handleInputChange = (e) => {
        e.persist();
        if(e.target.name=="pone"){
            setNameOne(e.target.value);
        }
        if(e.target.name=="ptwo"){
            setNameTwo(e.target.value);
        }
        //console.log(name_one+'\n'+name_two+"\n");
    }

    const [button_one_status,setButtonOneStatus]=useState('Play');
    const [button_two_status,setButtonTwoStatus]=useState('Play');
    const [player_one_games, setPlayerOneGames]=useState(0);
    const [player_two_games, setPlayerTwoGames]=useState(0);
    const [button_one_disabled, setButtonOneDisabled]=useState(false);
    const [button_two_disabled, setButtonTwoDisabled]=useState(false);

    const handleClick = (name) => {
        if(name=="One"){
            if(button_one_status=="Play" && button_two_status=="Play"){
                setButtonOneStatus('This user is playing now');
                setPlayerOneGames(player_one_games+1);
                setButtonOneDisabled(true);
            }
            if(button_one_status=="Play" && button_two_status=="This user is playing now"){
                setButtonOneStatus('This user is playing now');
                setButtonTwoStatus('Play');
                setPlayerOneGames(player_one_games+1);
                setButtonOneDisabled(true);
                setButtonTwoDisabled(false);
            }
        }
        if(name=="Two"){
            if(button_one_status=="Play" && button_two_status=="Play"){
                setButtonTwoStatus('This user is playing now');
                setPlayerTwoGames(player_two_games+1);
                setButtonTwoDisabled(true);
            }
            if(button_one_status=="This user is playing now" && button_two_status=="Play"){
                setButtonOneStatus('Play');
                setButtonTwoStatus('This user is playing now');
                setPlayerTwoGames(player_two_games+1);
                setButtonTwoDisabled(true);
                setButtonOneDisabled(false);
            }
        }
    }

        return(
            <div className="gameAdmin">
            <Player name="One" name_input={name_one} button_status={button_one_status}
                handleClick={handleClick} player_games={player_one_games} button_disabled={button_one_disabled}/>
            <Player name="Two" name_input={name_two} button_status={button_two_status}
                handleClick={handleClick} player_games={player_two_games} button_disabled={button_two_disabled}/>
                <form action="/action_page.php" className="newThings">
                    <label for="pone">Set Name of Player One</label>
                    <input type="text" id="pone" name="pone" 
                        onChange={handleInputChange}/><br/>
                    <label for="ptwo">Set Name of Player Two</label>
                    <input type="text" id="ptwo" name="ptwo" 
                        onChange={handleInputChange}/><br/>
                </form>
            </div>
        );
}
//onChange={this.handleInputChange}
export default GameAdmin
//class GameAdmin extends Component {