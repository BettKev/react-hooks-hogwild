// HogTile.js
import React from 'react';

function HogTile({ name, image }) {
    return (
        <div className="hog-tile">
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    );
}

export default HogTile;
