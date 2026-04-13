import React from 'react';
import StatsCard from '../ui/StatsCard';

const statsData = [
    {
        id: 1,
        content_1: 'Total Downloads',
        content_2: '29.6M',
        content_3: '21% more than last month'
    },
    {
        id: 2,
        content_1: 'Total Reviews',
        content_2: '906K',
        content_3: '46% more than last month'
    },
    {
        id: 3,
        content_1: 'Active Apps',
        content_2: '132+',
        content_3: '31 more will Launch'
    }
];

const Stats = () => {
    return (
        <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-10'>
            <div className='text-white space-y-8'>
                <h2 className='text-3xl font-bold text-center'>
                    Trusted by Millions, Built for You
                </h2>

                <div className='flex justify-center items-center gap-20 text-center'>
                    {
                        statsData.map(statsItem => <StatsCard key={statsItem.id} statsItem={statsItem} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Stats;