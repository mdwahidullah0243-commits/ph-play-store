import React from 'react';

const EmptyMessage = () => {
    return (
        <div className='text-3xl font-bold text-[#001931] text-center border border-slate-300 rounded-xl h-50 flex justify-center items-center'>
            No installed apps found!
        </div>
    );
};

export default EmptyMessage;