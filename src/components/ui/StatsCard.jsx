import React from 'react';

const StatsCard = ({ statsItem }) => {
    return (
        <div className='space-y-2'>
            <p>{statsItem.content_1}</p>
            <h3 className='text-6xl font-bold'>{statsItem.content_2}</h3>
            <p>{statsItem.content_3}</p>
        </div>
    );
};

export default StatsCard;