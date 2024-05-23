import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Balance = ({balance}) => {

    
    return (
        <div className='balance'>
            <h2>Current Balance</h2>
            <h3>${balance}</h3>
        </div>
    );
};

export default Balance;
