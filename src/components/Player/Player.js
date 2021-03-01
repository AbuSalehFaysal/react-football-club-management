import React from 'react';
import playerData from '../../data/data.json';
import { useState, useEffect } from 'react';
import './Player.css'
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import Team from '../Team/Team';


const Player = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
        console.log(playerData);
    }, [])

    const [selectedplayer, setSelectedplayer] = useState([]);

    const handleAddPlayer = (singleplayer) => {
        const newSelectedPlayer = [...selectedplayer, singleplayer];
        setSelectedplayer(newSelectedPlayer);
    }
    return (
        <div className="players-team-container">
            <div className="players-container">
                {
                    players.map(player => <PlayerProfile
                        handleAddPlayer = {handleAddPlayer}
                        singleplayer={player}
                        ></PlayerProfile>)
                }
            </div>
            {/* <h1>This is Player</h1>
            <h1>{players.length}</h1> */}
            <div className="myteam-container">
                <Team selectedplayer={selectedplayer}></Team>
            </div>

        </div>
    );
};

export default Player;