// HogTile.js
import React from "react";

function HogTile({ name, image }) {
    return (
        <div className="pigTile minPigTile">
            <h3>{name}</h3>
            <img src={image} alt={name} className="TwirlyPig" />
        </div>
    );
}

export default HogTile;
