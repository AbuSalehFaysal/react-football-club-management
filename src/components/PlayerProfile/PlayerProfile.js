import React from 'react';
import './PlayerProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const PlayerProfile = (props) => {
    // console.log(props);
    const { img, name, salary } = props.singleplayer;
    return (
        <div className="single-player">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="profile-info">
                <h1>Full Name: {name}</h1>
                <br/>
                <h1> Salary : ${salary}</h1>
                <Button color="primary" onClick={() => props.handleAddPlayer(props.singleplayer)}> <FontAwesomeIcon icon={faPlus} /> Add to my team</Button>
            </div>
        </div>
    );
};

export default PlayerProfile;