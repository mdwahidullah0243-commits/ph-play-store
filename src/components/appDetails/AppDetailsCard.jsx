import React from 'react';
import MyButton from '../ui/MyButton'
import DownRatRev from './DownRatRev';

const AppDetailsCard = ({ existingApp }) => {
    const { image, title, companyName, size } = existingApp;

    return (
        <div className='flex items-center gap-20'>
            <div className='bg-base-100 p-10 rounded-[50px] shadow-md'>
                <img className='rounded-full w-60' src={image} alt={title} />
            </div>

            <div>
                <div className='space-y-3 border-b border-slate-300 pb-5'>
                    <h2 className='text-[#001931] text-5xl font-bold'>
                        {title}
                    </h2>
                    <p className='text-[#627382] font-medium'>
                        Developed by <span className='text-[#632EE3]'>{companyName}</span>
                    </p>
                </div>

                <DownRatRev existingApp={existingApp} />

                <div className='mt-8'>
                    <MyButton existingApp={existingApp} content={`Install Now (${size} MB)`} />
                </div>
            </div>
        </div>
    );
};

export default AppDetailsCard;