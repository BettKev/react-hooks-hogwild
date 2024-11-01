// HogTile.js
import React, { useState } from "react";

function HogTile({ name, image, specialty, weight, greased, highestMedal }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleTileClick = () => {
        setShowDetails((prevShowDetails) => !prevShowDetails);
    };

    return (
        <div className="pigTile minPigTile" onClick={handleTileClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="TwirlyPig" />
            {showDetails && (
                <div className="hog-details">
                    <p><strong>Specialty:</strong> {specialty}</p>
                    <p><strong>Weight:</strong> {weight} lbs</p>
                    <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
                    <p><strong>Highest Medal Achieved:</strong> {highestMedal}</p>
                </div>
            )}
        </div>
    );
}

export default HogTile;
