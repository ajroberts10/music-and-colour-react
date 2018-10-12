import React from 'react';

import './SetlistItem.scss'

const SetlistItem = ({itemData : { title, artist }}) => (
    <li className="setlistItem">
        <div className="container">
            <div className="row">
                <div className="col">
                    <span className=" setlistItem__title">{title}</span>
                </div>
                <div className="col">
                    <span className="setlistItem__artist">{artist}</span>
                </div>

            </div>
        </div>
    </li>
);

export default SetlistItem;
