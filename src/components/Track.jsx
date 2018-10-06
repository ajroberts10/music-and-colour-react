import React from 'react';

const Track = ({trackData : { title, duration, stream_url, id }}) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{duration}</h6>
            <p className="card-text">{stream_url}</p>
            <a href={id} className="card-link">Play track.</a>
        </div>

    </div>
);

export default Track;
