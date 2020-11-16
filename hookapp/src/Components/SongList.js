import React, { useState } from 'react';
import uuid from 'uuid';
const SongList = () => {

    const [songs, setSongs] = useState([
        {title: "Almost home", id: 1},
        {title: "Dimpho", id: 2},
        {title: "Cries of the motherland", id: 3}
    ]);

    const addSong = () => {
        setSongs([...songs, {title: "New song", id: uuid()}]);
    }
    return ( 
        <div className = "song-list">
            <ul>
                {songs.map(song => {
                    return (
                    <li key = {song.id}>{song.index}</li>
                    )
                })}
            </ul>
            <button onClick = {addSong}>Add Song</button>
        </div>
     );
}
 
export default SongList;