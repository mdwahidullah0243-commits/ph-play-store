import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewsIcon from '../../assets/icon-review.png';

const DownRatRev = ({ existingApp }) => {
    const {downloads, ratingAvg, reviews} = existingApp;

    return (
        <div className='text-[#001931] flex items-center gap-20 mt-6'>
            <div className='space-y-2'>
                <img src={downloadIcon} alt="Download Icon" />
                <p>Downloads</p>
                <h3 className='text-4xl font-extrabold'>{downloads / 1000000}M</h3>
            </div>
            <div className='space-y-2'>
                <img src={ratingIcon} alt="Rating Icon" />
                <p>Average Ratings</p>
                <h3 className='text-4xl font-extrabold'>{ratingAvg}</h3>
            </div>
            <div className='space-y-2'>
                <img src={reviewsIcon} alt="Reviews Icon" />
                <p>Total Reviews</p>
                <h3 className='text-4xl font-extrabold'>
                    {
                        reviews >= 1000000
                            ? `${Math.round(reviews / 1000000)}M`
                            : `${Math.round(reviews / 1000)}K`
                    }
                </h3>
            </div>
        </div>
    );
};

export default DownRatRev;