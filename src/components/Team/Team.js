import React from 'react';

const Team = (props) => {
    const selectedplayer = props.selectedplayer;
    const totalSalary = selectedplayer.reduce((total, singleplayer) => total + singleplayer.salary, 0);
    return (
        <div>
            <h1>My Club</h1>
            <h3>Number of Selected Players: {selectedplayer.length}</h3>
            <h3>List of Selected Players: 
                <ul>
                    {
                        selectedplayer.map(singleselectedplayer => <li>Name: {singleselectedplayer.name} -  Salary: ${singleselectedplayer.salary}</li>)
                    }
                </ul>
            </h3>
            <h3>Total Budget of Selected Players: ${totalSalary}</h3>
        </div>
    );
};

export default Team;