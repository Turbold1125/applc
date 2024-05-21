import React from 'react';

const Balance = () => {
    // Assuming a fixed balance for demonstration purposes
    const balance = 1000.00;

    return (
        <div>
            <h2>Current Balance</h2>
            <p>${balance}</p>
        </div>
    );
};

export default Balance;
