import React from 'react';

const Balance = ({balance}) => {
    // Assuming a fixed balance for demonstration purposes

    return (
        <div className='balance'>
            <h2>Current Balance</h2>
            {/* Энд данс бичвэл гоё */}
            <h3>${balance}</h3>
        </div>
    );
};

export default Balance;
