import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onBandSubmit(name)
        setName('');
    }

    return (
        <div>
            <div>Band Input</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="bandName">Name:</label>
                <input id="bandName" type="text" value={name} onChange={handleChange} />
                <button>add band</button>
            </form>
        </div>
    );
}

export default BandInput;
