import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const DownRatSz = ({ installedApp }) => {
    const { downloads, ratingAvg, size } = installedApp;
    return (
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2 text-[#00D390] font-medium'>
                <img className='w-5' src={downloadIcon} alt="Downloads Icon" />
                <span>{downloads / 1000000}M</span>
            </div>
            <div className='flex items-center gap-2 text-[#FF8811] font-medium'>
                <img className='w-5' src={ratingIcon} alt="Ratings Icon" />
                <span>{ratingAvg}</span>
            </div>
            <div className='text-[#627382] font-medium'>
                <span>{size} MB</span>
            </div>
        </div>
    );
};

export default DownRatSz;