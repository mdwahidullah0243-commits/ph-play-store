import React from 'react';
import MyButton from '../../components/ui/MyButton';
import DownRatSz from './DownRatSz';

const InstalledAppCard = ({ installedApp }) => {
    const { image, title } = installedApp;

    return (
        <div className='flex justify-between items-center p-5 rounded-xl bg-base-100 border border-slate-200 shadow-sm'>
            <div className='flex items-center gap-6'>
                <div>
                    <img className='w-20 rounded-xl' src={image} alt={title} />
                </div>

                <div className='space-y-3'>
                    <h3 className='text-[#001931] text-xl font-semibold'>
                        {title}
                    </h3>

                    <DownRatSz installedApp={installedApp} />
                </div>
            </div>

            <MyButton content='Uninstall' existingApp={installedApp} />
        </div>
    );
};

export default InstalledAppCard;