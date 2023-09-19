import React from "react";
import BandInput from "./BandInput";
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
    const dispatch = useDispatch();
    const bands = useSelector(state => state.bands.entities);

    function handleBandSubmit(name) {
        dispatch(bandAdded(name));
    }

    return (
        <div>
            <BandInput onBandSubmit={handleBandSubmit} />
            <ul>
                {bands.map((band, index) => (
                    <li key={index}>{band}</li>
                ))}
            </ul>
        </div>
    );
}

export default BandsContainer;
